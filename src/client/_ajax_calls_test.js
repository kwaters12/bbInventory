(function() {

  "use strict";
  // var chai = require('chai');
  // var sinon = require('../../node_modules/sinon/pkg/sinon-1.17.2.js');
  // var categories = require('./ajax_calls.js');

  // // chai.should();

  // describe("CategoriesCall", function() {

  //   beforeEach(function() {
  //     this.xhr = sinon.useFakeXMLHttpRequest();

  //     this.requests = [];
  //     this.xhr.onCreate = function(xhr) {
  //       this.requests.push(xhr);
  //     }.bind(this);
  //   });

  //   afterEach(function() {
  //     this.xhr.restore();
  //   });

  //   it('should parse fetched data as JSON', function(done) {
  //     var data = { foo: 'bar' };
  //     var dataJson = JSON.stringify(data);

  //     categories.get(function(err, result) {
  //       result.should.deep.equal(data);
  //       done();
  //     });

  //     this.requests[0].respond(200, { 'Content-Type': 'text/json'}, dataJson);
  //   });
  // });

}());