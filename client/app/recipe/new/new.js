'use strict';

angular.module('msMealPlannerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new', {
        url: '/new',
        templateUrl: 'app/recipe/new/new.html',
        controller: 'NewCtrl'
      });
  });
