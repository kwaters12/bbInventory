/*global describe, it, expect, example, beforeEach, mocha, $:false, jQuery:false, bbCategories, bbProducts */
(function() {
  "use strict";

  var ajaxCalls = require('./ajax_calls.js');
  var constants = require("./constants.js");

  mocha.setup({ignoreLeaks: true});

  describe('categories', function() {
    var categoriesDiv;
    var categoriesList;
    

    beforeEach(function() {
      
      categoriesDiv = $("<div id='categories'></div>");
      $(document.body).append(categoriesDiv);
      categoriesList = {
        subCategories: [
          {
            name: "televisions",
            id: 1,
            productCount: 23
          },
          {
            name: "radios",
            id: 2,
            productCount: 25
          },
          {
            name: "computers",
            id: 3,
            productCount: 24343
          },
        ]
      };      
      ajaxCalls.appendCategories(categoriesList, categoriesDiv);
      
    });

    it("loads the categories", function() {
      ($('.category').length).should.not.equal(0);
    }); 

  });
  
  describe('products', function() {
    var productsDiv;
    var productsList = [];
    var category;

    beforeEach(function() {
      productsDiv = $("<div id='products'></div>");
      $(document.body).append(productsDiv);
        
      var product1 = {
        name: "Chromecast",
        shortDescription: "Information here",
        thumbnailImage: "/multimedia/products/150x150/103/10392/10392133.jpg"
      };
      var product2 = {
        name: "XBox One",
        shortDescription: "Information here",
        thumbnailImage: "/multimedia/products/150x150/103/10392/10392133.jpg"
      };      
      productsList.push(product1, product2);
      category = "electronics";
      ajaxCalls.appendProducts(productsList, productsDiv);
    });

    it("shows all products by default", function() {
      ($('.product-wrapper').length).should.not.equal(0);
    });
  });


}());