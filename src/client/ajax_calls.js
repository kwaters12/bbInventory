/*global $:false, jQuery:false, bbCategories:true, bbProducts:true */

bbCategories = window.bbCategories || {};
bbProducts = window.bbProducts || {};

(function() {
  'use strict';

  bbCategories.initializeCategoryList = function(categoriesDiv) {
    $.ajax({
      url: 'http://www.bestbuy.ca/api/v2/json/category/Departments',
      data: {
        format: 'json'
      },
      dataType: 'jsonp',
      type: 'GET',
      success: function(data) {            
        exports.appendCategories(data, categoriesDiv); 
      }
    });   
    
  };

  bbProducts.initializeProductList = function(productsDiv) {
    $.ajax({
      url: "http://www.bestbuy.ca/api/v2/json/search",
      data: {
        format: 'json'
      },
      dataType: 'jsonp',
      type: 'GET',
      success: function(data) {
        var products = data.products;

        $('#products').empty();
        exports.appendProducts(products, productsDiv, 'all');
        
      }
    });
  };

  function handleCategoryEvents(categoryDiv) {
    var $category = $(categoryDiv);
    var productsDiv = $('#products');

    $category.click(function(event) {
      var categoryID = $(this).data('catid');
      $('#products').empty();
      exports.loadProducts(categoryID, productsDiv);
      return categoryID;
    });
  }

  function handleProductEvents(productDiv) {
    var $product = $(productDiv);
    var img = $product.find('img').attr('src');
    var description = $product.data('description');
    var name = $product.data('name');

    $product.click(function(event) {
      var $overlay = $('<div id="overlay"></div>');
      $(document.body).append($overlay);
      var $productModal = '<div class="product-modal"><img src="' + img + '"><h3>' + name + '</h3><p>' + description + '</div>';
      $($overlay).append($productModal).click(function() {
        $(this).remove();
      });
    });
  }

  exports.loadProducts = function loadProducts(category, productsDiv) {
    var categoryUrl = 'http://www.bestbuy.ca/api/v2/json/search?categoryid=' + category;
    $.ajax({
      url: categoryUrl,
      data: {
        format: 'json'
      },
      dataType: 'jsonp',
      type: 'GET',
      success: function(data) {
        var products = data.products;
        exports.appendProducts(products, productsDiv, category);       
        
      }
    });
  };

  exports.appendCategories = function appendCategories(categories, categoriesDiv) {
    for (var i = 0; i < categories.subCategories.length; i++) {
      var $category = '<div class="category" data-catid="' + categories.subCategories[i].id + '"> ' + categories.subCategories[i].name + '(' + categories.subCategories[i].productCount + ')';
      $(categoriesDiv).append($category);      
    }
    var categoriesDivs = $('.category');

    for (var j = 0; j < categoriesDivs.length; j++) {
      handleCategoryEvents(categoriesDivs[j]);
    }

  };

  exports.appendProducts = function appendProducts(products, productsDiv, categoryName) {
    var category = categoryName || '';
    for (var i = 0; i < products.length; i++) {
      $(productsDiv).append('<div class="col-md-4"><div class="product-wrapper" data-category="' + categoryName + '" data-sku="' + products[i].sku + '" data-description="' + products[i].shortDescription + '" data-name="' + products[i].name + '"> <img src="http://www.bestbuy.ca/' + products[i].thumbnailImage + '"></div></div>');
    }   
    var productsDivs = $('.product-wrapper');

    for (var j = 0; j < productsDivs.length; j++) {
      handleProductEvents(productsDivs[j]);
    }

  };
  
 
}());