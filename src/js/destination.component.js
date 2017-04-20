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
            words: []
        };

        function _getDeepCloneOfObject(object) {
            return JSON.parse(JSON.stringify(object));
        }

        function _ensureArray(item) {
            if (item.constructor !== Array) {
                item = [item];
            }
            return item;
        }

        function _setupState(state) {
            state = state || {};
            _$ = Object.assign({},
                _getDeepCloneOfObject(_defaultState),
                _getDeepCloneOfObject(state)
            );
        }

        function _addWord(word) {
            _$.words.push(word);
        }

        function _getWordList() {
            return _$.words;
        }

        return {
            init: function (initState) {
                _setupState(initState);
            },

            getWords: _getWordList,

            addWords: function (newWords) {
                _ensureArray(newWords).forEach(function (newWord) {
                    var word = _getDeepCloneOfObject(newWord);
                    _addWord(word);
                });
            },

            destroy: function () {
                _setupState(null);
            }
        };
    }
})();
