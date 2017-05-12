'use strict';
angular.module('com.module.files')
  .run(function ($rootScope, $http, CoreService, gettextCatalog) {
    $rootScope.addMenu('Files', 'app.files.list', 'fa-file');

    $http.get(CoreService.env.apiUrl + '/containers/files/files').then(function (data) {
      $rootScope.addDashboardBox(gettextCatalog.getString('Files'), 'bg-blue', 'ion-paperclip', data.length, 'app.files.list');
    }, function(result) {
      //error result
      console.log(result);
    });

  });
