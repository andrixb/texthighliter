(function() {
    'use strict';

    var MODULE_NAME = 'source',
        APP_NAMESPACE = 'ae';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};

    window[APP_NAMESPACE][MODULE_NAME] = function() {
      return {
          init: function() {

          },
          destroy: function() {
              _$ = null;
          }
      };
    }
  })();
