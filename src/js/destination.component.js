(function () {
    'use strict';

    var MODULE_NAME = 'destination',
        APP_NAMESPACE = 'ae';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};

    window[APP_NAMESPACE][MODULE_NAME] = function () {
        // It hosts module states
        var _$ = {};

        // Initial module configuration
        var _defaultState = {
            paragraph: []
        };

        function _getDeepCloneOfObject(object) {
            return JSON.parse(JSON.stringify(object));
        }

        function _setupState(state) {
            state = state || {};
            _$ = Object.assign({},
                _getDeepCloneOfObject(_defaultState),
                _getDeepCloneOfObject(state)
            );
        }

        function _createNewParagraph(words) {
            _$.paragraph.push(words);
        }
        
        function _getParagraphs() {
            return _$.paragraph;
        }

        function _addParagraphs(wordsSet) {
            _createNewParagraph(wordsSet);
        }

        return {
            init: function (initState) {
                _setupState(initState);
            },

            getParagraphs: function () {
                _getParagraphs();
            },

            addParagraph: function (newWords) {
                _addParagraphs(newWords);
            },

            destroy: function () {
                _setupState(null);
            }
        };
    }
})();
