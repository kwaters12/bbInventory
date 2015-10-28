(function() {
  "use strict";

  var version = require("../util/version_checker.js");
  var jshint  = require("simplebuild-jshint");


  var jshintConfig = require("../config/jshint.conf.js");
  var paths = require("../config/paths.js");
  
  var startTime = Date.now();

  desc("Lint and test");
  task("default", [ "version", "lint", "build" ], function() {
    var elapsedSeconds = (Date.now() - startTime) / 1000;
    console.log("\n\nBUILD OK (" + elapsedSeconds.toFixed(2) + "s)");
  });

  desc("Start server (for manual testing)");
  task("run", [ "build" ], function() {
    console.log("Starting server. Press Ctrl-C to exit." );
    jake.exec("node " + paths.distDir + "/run.js 5000", { interactive: true}, complete);
  }, { async: true });

  //*** LINT

  desc("Lint everything");
  task("lint", [ "lintNode", "lintClient" ]);

  task("lintNode", function() {
    process.stdout.write("Linting Node.js code:");
    jshint.checkFiles({
      files: [ "build/**/*.js"],
      options: jshintConfig.nodeOptions,
      globals: jshintConfig.nodeGlobals
    }, complete, fail);
  }, { async: true });

  task("lintClient", function() {
    console.log("Linting browser code:");
    jshint.checkFiles({
      files: [ "src/client/**/*.js"],
      options: jshintConfig.clientOptions,
      globals: jshintConfig.clientGlobals
    }, complete, fail);
  }, { async: true });

  desc("Build distribution package");
  task("build", [ "prepDistDir", "buildClient", "buildServer"]);

  task("prepDistDir", [ "generated/dist" ], function() {

  });

  task("buildClient", function() {
    console.log("Copying client code: .");
  });

  task("buildServer", function() {
    console.log("Copying sever code: .");
  });

  //*** CHECK VERSION

  desc("Check Node version");
  task("version", function() {
    process.stdout.write("Checking Node.js version: .");
    version.check({
      name: "Node",
      expected: require("../../package.json").engines.node,
      actual: process.version,
      strict: true
    }, complete, fail);

  }, { async: true });

  //*** CREATE DIRECTORIES

  directory("generated/dist");
  // directory(paths.testDir);
  // directory(paths.clientDistDir);

}());