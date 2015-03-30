require('angular')
// require('firebase')
// require('angularfire')
require('angular-ui-router')

angular.module('app', [
  // 'firebase',
  'ui.router',
  require('./components/sty-buttons').name
])
  .config(require('./config'))
