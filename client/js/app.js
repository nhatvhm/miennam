// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'angular.filter',
    'angularBootstrapNavTree',
    'angularFileUpload',
    'btford.markdown',
    'oitozero.ngSweetAlert',
    'config',
    'formly',
    'lbServices',
    'monospaced.elastic',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.codemirror',
    'ui.gravatar',
    'ui.grid',
    'ui.router',
    'angular-toasty',
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
  .run(function($rootScope, gettextCatalog) {

    $rootScope.langs = {
      'us': gettextCatalog.getString('English'),
      'nl': gettextCatalog.getString('Dutch')
    };

    var LangVar = navigator.language || navigator.userLanguage;
    var userLangVar = LangVar.substring(0, 2) + '-' + LangVar.substring(3, 5).toUpperCase();
    $rootScope.lang = userLangVar;
    gettextCatalog.setCurrentLanguage(userLangVar);

  });
  /*
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      });

    $urlRouterProvider.otherwise('todo');
  }]);*/