var fs = require('fs');

var moduleName = 'styPanels';
var template = fs.readFileSync(__dirname + '/template.html');

var directiveFn = function () {
  return {
    template: template,
    scope: {}
  };
};

var dependencies = [];

module.exports = angular.module(moduleName, dependencies)
  .directive(moduleName, directiveFn);
