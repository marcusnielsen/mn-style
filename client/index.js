require('angular')
// require('firebase')
// require('angularfire')
require('angular-ui-router')

angular.module('app', [
  // 'firebase',
  'ui.router',
  require('./objects/components/sty-buttons').name,
  require('./objects/sty-layouts').name
])
  .config(require('./config'))
