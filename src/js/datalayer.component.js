(function() {
    'use strict';

    var MODULE_NAME = 'dataLayer',
        APP_NAMESPACE = 'ae';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};

    window[APP_NAMESPACE][MODULE_NAME] = function() {
      // It hosts module states
        var _$ = {};

        // Initial module configuration
        var _config = {};

      return {
          init: function(source, destination) {
              _$.source = source;
              _$.destination = destination;
          },
          destroy: function() {
              _$.source = null;
              _$.destination = null;
          }
      };
    };
})();
