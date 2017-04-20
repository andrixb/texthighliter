(function () {
    'use strict';

    var MODULE_NAME = 'dataLayer',
        APP_NAMESPACE = 'ae';

    window[APP_NAMESPACE] = window[APP_NAMESPACE] || {};

    window[APP_NAMESPACE][MODULE_NAME] = function () {
        // It hosts module states
        var _$ = {};

        // Initial module configuration
        var _config = {
            words: '.words.text-muted'
        };

        function _setInitHighlighting() {
            _$.highlighting = '';
        }

        function _setWordsObj() {
            _$.wordsObj = [];
        }

        function _setInitDestination() {
            var destInitConfig = {};
            _config.destination = window.ae.destination();
            _config.destination.init(destInitConfig);
        }

        function _textHighlight(event) {
            if (event.target.all) {
                _$.highlighting += document.selection.createRange().text;
            } else {
                _$.highlighting += ' ' + document.getSelection();
                _$.wordsTag = event.target.querySelectorAll(_config.words);
                _extractWordData(_$.wordsTag);
                _config.destination.addWords(_$.wordsObj);
            }
        }

        function _extractWordData(element) {
            for (var i = 0; i < element.length; i++) {
               _$.wordsObj.push({
                    'data-start-time': element[i].getAttribute('data-start-time'),
                    'data-text': element[i].getAttribute('data-text'),
                    'data-end-time': element[i].getAttribute('data-end-time')
                });
            }
        }

        function _addListeners() {
            _$.source.addEventListener('mouseup', _textHighlight);
        }

        function _main() {
            _setInitHighlighting();
            _setWordsObj();
            _setInitDestination();
            _addListeners();
        }

        return {
            init: function (source, destination) {
                _$.source = source;
                _$.destination = destination;
                _main();
            },
            destroy: function () {
                _$.source = null;
                _$.destination = null;
            }
        };
    };
})();
