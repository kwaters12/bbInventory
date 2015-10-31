/*global describe, it, expect, example, beforeEach, mocha */
(function() {
  "use strict";

  var ajaxCalls = require('./ajax_calls.js');
  var constants = require("./constants.js");

  mocha.setup({ignoreLeaks: true});

  describe('list products', function() {
    var category;

    beforeEach(function() {
      category = document.createElement('category');
      category.setAttribute('data-catid', '2015');
    });

  });

  it("has an API", function() {
    ajaxCalls.initialize();
  });

  it("adds 'active' class to category when clicked", function() {

  });




  function cssClass(field) {
    return field.getAttribute("class");
  }


}());