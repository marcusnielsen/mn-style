var fs = require('fs')

module.exports = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('all');

  $stateProvider
    .state('all', {
      url: '/all',
      template: fs.readFileSync(__dirname + '/ui-views/all/template.html')
    })
    .state('components', {
      url: '/components',
      template: fs.readFileSync(__dirname + '/ui-views/components/template.html')
    });
    /*.state('groups', {
      url: '/groups/:id',
      template: fs.readFileSync(__dirname + '/ui-views/groups/template.html'),
      controller: require('./ui-views/groups/controller'),
      controllerAs: 'vm'
    })*/

}
