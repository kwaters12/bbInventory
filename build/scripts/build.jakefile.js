(function() {
  "use strict";

  var version = require("../util/version_checker.js");
  
  var startTime = Date.now();

  task("default", [ "version" ], function() {
    var elapsedSeconds = (Date.now() - startTime) / 1000;
    console.log("\n\nBUILD OK (" + elapsedSeconds.toFixed(2) + "s)");
  });

  task("version", function() {
    console.log("Checking Node.js version: .");
    version.check({
      name: "Node",
      expected: require("../../package.json").engines.node,
      actual: process.version,
      strict: true
    }, complete, fail);

  }, { async: true });

}());