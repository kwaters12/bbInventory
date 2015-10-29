(function() {
  "use strict";

  var ajaxCalls = require('./ajax_calls.js');

  describe('list products', function() {
    var category;

    beforeEach(function() {
      category = document.getElementsByClassName('category');
    });

    it('shows products for a category', function() {
      ajaxCalls.loadProducts();

      setTimeout(function() {
        var productsDiv = document.getElementsByClassName('product-wrapper');
        productsDiv.length.should.not.equal(0);
      }, 1000);
      
    });
  });


}());