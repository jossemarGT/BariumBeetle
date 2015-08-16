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
    vm.collapseSidebar = false;

    vm.sidebarToggle = function() {
      console.log(":D");
      vm.collapseSidebar = !vm.collapseSidebar;
    };

  }
})();
