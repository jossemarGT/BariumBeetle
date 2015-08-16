(function() {
  'use strict';

  angular
    .module('bariumBeetle')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('section', {
        url: '/',
        templateUrl: 'app/dashboard/skeleton.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('section.home', {
        url: 'home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
