// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'lbServices',
    'ui.bootstrap',
    'ui.codemirror',
    'ui.gravatar',
    'ui.grid',
    'ui.router',
    'config',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toasty',
    'autofields',
    'gettext',
    'com.module.core',
    'com.module.about',
    'com.module.events',
    'com.module.files',
    'com.module.notes',
    'com.module.pages',
    'com.module.posts',
    'com.module.products',
    'com.module.sandbox',
    'com.module.settings',
    'com.module.users'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      });

    $urlRouterProvider.otherwise('todo');
  }]);