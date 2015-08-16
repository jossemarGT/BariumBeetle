(function() {
  'use strict';

  angular
    .module('bariumBeetle')
    .directive('sideMenuToggle', sideMenuToggle);

  /** @ngInject */
  function sideMenuToggle($window) {
    var directive = {
      restrict: 'A',
      link: linkFn
    };

    return directive;

    function linkFn(_, element) {
      $window.$.AdminLTE.pushMenu.activate(element);
    }
  }

})();
