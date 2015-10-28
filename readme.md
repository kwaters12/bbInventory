Workflow 2015 - http://www.letscodejavascript.com/v3/episodes/lessons_learned/16

Before building for the first time:

1) Install Git
2) Install Node
3) Clone repository by typing '...'

Build like this:

'./jake.sh' (Unix/Mac) or 'jake.bat' (Windows)

TDD in JavaScript

Front-End Unit Testing

1. Think - What to do next. Minimum amount of code to get to that point. What tests can you do for this?
2. Red - Write test to fail
3. Green - Make test pass with minimal code
4. Refactor
5. Repeat

Each Test:

1) Arrange - Set Up Test Environment // CREATE DOM ELEMENTS
2) Act - Run Production Code // RUN PRODUCTION CODE
3) Assert - Check Results // CHECK DOM ELEMENTS
4) Reset // ERASE DOM ELEMENTS

1) Use Git - git init
2) NPM - Build Automation - Options:
Grunt 
Pros:
- great plugin ecosystem
- easy to get up and running
Cons:
- uses configuration-based approach, which gets messy over time
- not as much control as with Jake
Gulp
Pros:
- uses just JS
Cons:
- lots of things running async. Hard to figure out when things fail
Jake*
Pros:

Cons:
- Older tool, not as many plugins

Install Jake:
npm install jake --ignore-scripts --save-dev
--> Ignores binary scripts + saves changes in packages.json

Run Jake:
node_modules/.bin/jake

remove temporary files:
git clean -fdx

Create file - jake.sh:
1 -> Checks to see if node_modules/.bin/jake exists
2 -> Runs said file from the command line

Run -> ./jake.sh => Looks for Jake, and if it can't find it rebuilds the packages -> AUTOMATION!!!

Create Jakefile - for managing build
NEW FILE -> build/scripts/build.jakefile.js

Check which version of Node is being run:
NEW FILE -> build/util/version_checker.js

Install Semver
npm install semver --ignore-scripts --save-dev

Continuous Integration
-> Do it manually
-> All you need is another machine to run the build on
-> Use Git's branching structure

1) Set up Master 'Integration' branch on a separate Integration machine
2) Set up 'Dev1, Dev2, etc.' branches for each development machine on a separate Integration machine
3) Clone those branches to their respective dev stations

Git Summary - Continuous Integration:

1. INTEGRATE LOCALLY
  git pull origin integration

2. PUSH TO INTEGRATION MACHINE FOR TESTING
  git push origin dev1

3. PUBLISH TO KNOW-GOOD INTEGRATION BRANCH
  git checkout integration
  git merge dev1 --no-ff

NEW FILE-> ./build/scripts/ci.jakefile.js => Continuous Integration with Git !!! FOR TEAM PROJECTS !!!
NEW FILE-> ./ci.sh => Shell script that runs the CI buildfile

LINTING

JS Hint -> Nice balance between performance and not being too opinionated

Add 'lint' task to build.jakefile.js

INSTALL -> npm install simplebuild-jshint --ignore-scripts --save-dev

build.jakefile.js -> Add lintNode and lintClient tasks

FRONTEND MODULARITY

- NEW FILES -> src/client/contants.js | src/client/example.js | src/client/index.html | scr/server/server.js | src/run.js

- build.jakefile.js => ADD 'run' task
NEW FILE -> build/config/paths.js => Common PATH vars
build.jakefile.js -> ADD CREATE DIRECTORIES area
npm install http-server --ignore-scripts --save-dev

build.jakefile.js -> ADD 'build' task and its dependencies
ShellJS => For Unix-like file manipulations in Node
npm install shelljs --ignore-scripts --save-dev

build.jakefile.js => FILL IN => prepDistDir, buildClient, buildServer tasks.
NEXT:=> Use Browserify to bundle front-end js

TIME FOR TESTING!!!
Karma - Automate cross-browser testing
Either Mocha or Jasmine for the testing language
expect.js -> One of the few assertion frameworks that runs on IE8
Chai -> What to use if not supporting IE8!!












