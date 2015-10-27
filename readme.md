Workflow 2015 - http://www.letscodejavascript.com/v3/episodes/lessons_learned/16

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