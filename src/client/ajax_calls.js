(function() {
  'use strict';
  /*global $:false, jQuery:false */

  exports.loadProducts = function loadProducts(category) {
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

        $('#products').empty();
        for (var i = 0; i < products.length; i++) {
          $("#products").append('<div class="col-md-4"><div class="product-wrapper"> <img src="http://www.bestbuy.ca/' + products[i].thumbnailImage + '"></div></div>');

        }
        
        
      }
    });
  };

  $(document).ready(function() {
    $.ajax({
      url: 'http://www.bestbuy.ca/api/v2/json/category/Departments',
      data: {
        format: 'json'
      },
      dataType: 'jsonp',
      type: 'GET',
      success: function(data) {
        for (var i = 0; i < data.subCategories.length; i++) {
          jQuery('#categories').append('<div class="category" data-catid="' + data.subCategories[i].id + '"> ' + data.subCategories[i].name + '(' + data.subCategories[i].productCount + ')');
        }
        $('.category').on('click', function() {
          var categoryID = $(this).data('catid');
          exports.loadProducts(categoryID);          
        });
        
      }
    });

  });

 
}());