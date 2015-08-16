(function() {
  'use strict';

  angular
    .module('bariumBeetle')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController() {
    var vm = this;

    vm.eventName = 'CopperMantis';
    vm.shortEventName = 'CMS';

  }
})();
