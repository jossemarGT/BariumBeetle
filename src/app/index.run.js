(function() {
  'use strict';

  angular
    .module('bariumBeetle')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
