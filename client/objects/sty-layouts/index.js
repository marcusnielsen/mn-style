var fs = require('fs');

var moduleName = 'styLayouts';
var template = fs.readFileSync(__dirname + '/template.html');
var controllerName = moduleName + 'Controller';

var directiveFn = function () {
  return {
    controller: controllerName,
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    scope: {}
  };
};

var dependencies = [];

module.exports = angular.module(moduleName, dependencies)
  .controller(controllerName, require('./controller'))
  .directive(moduleName, directiveFn);
