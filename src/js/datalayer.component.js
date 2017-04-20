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
            words: '.words'
        };

        function _setInitDestination() {
            var destInitConfig = {};
            _config.destination = window.ae.destination();
            _config.destination.init(destInitConfig);
        }

        function _textHighlight(event) {
            var range = document.getSelection().getRangeAt(0);
            var content = range.extractContents();
            var wordsTag = content.querySelectorAll(_config.words);
            var wordsArrObjs = _extractWordData(wordsTag);
            _config.destination.addParagraph(wordsArrObjs);
        }

        function _extractWordData(element) {
            var tmpArr = [];
            for (var i = 0; i < element.length; i++) {
               tmpArr.push({
                    'data-start-time': element[i].getAttribute('data-start-time'),
                    'data-text': element[i].getAttribute('data-text'),
                    'data-end-time': element[i].getAttribute('data-end-time')
                });
            }
            return tmpArr;
        }

        function _addListeners() {
            _$.source.addEventListener('mouseup', _textHighlight);
        }

        function _main() {
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
