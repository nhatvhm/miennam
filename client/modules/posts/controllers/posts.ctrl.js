'use strict';
angular.module('com.module.posts')
  .controller('PostsCtrl', function ($scope, $state, $stateParams, CoreService, gettextCatalog, Post) {

    var postId = $stateParams.id;

    if (postId) {
      $scope.post = Post.findById({
        id: postId
      }, function () {
      }, function (err) {
        console.log(err);
      });
    } else {
      $scope.post = {};
    }

    function loadItems() {
      $scope.posts = Post.find();
    }

    loadItems();

    $scope.delete = function (id) {
      CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
        Post.deleteById(id, function () {
          CoreService.toastSuccess(gettextCatalog.getString('Post deleted'), gettextCatalog.getString('Your post is deleted!'));
          loadItems();
          $state.go('app.posts.list');
        }, function (err) {
          CoreService.toastError(gettextCatalog.getString('Error deleting post'), gettextCatalog.getString('Your post is not deleted: ') + err);
        });
      }, function () {
        return false;
      });
    };

    $scope.formFields = [
      {
        key: 'title',
        type: 'text',
        label: 'Title',
        required: true
      },
      {
        key: 'content',
        type: 'textarea',
        label: 'Content',
        required: true
      },
      {
        key: 'image',
        type: 'text',
        label: 'image',
        required: true
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
      Post.upsert($scope.post, function () {
        CoreService.toastSuccess(gettextCatalog.getString('Post saved'), gettextCatalog.getString('Your post is safe with us!'));
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };

  });
