(function() {
    'use strict';

    var MODULE_NAME = 'destination',
        APP_NAMESPACE = 'ae';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};

    window[APP_NAMESPACE][MODULE_NAME] = function() {
      // It hosts module states
        var _$ = {};

        // Initial module configuration
        var _config = {};

      return {
          init: function() {

          },
          destroy: function() {
              _$ = null;
          }
      };
    }
  })();
