'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updater = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _domainProviders = require('./domainProviders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Updater = function () {
    function Updater() {
        _classCallCheck(this, Updater);
    }

    _createClass(Updater, [{
        key: 'Updater',
        value: function Updater() {

            this.saveData = './savedProviders.json';
            this.providers = [];
            this.loadProviders();
        }
    }, {
        key: 'loadProviders',
        value: function loadProviders() {
            var _this = this;

            try {

                // load saved file
                var content = _fs2.default.readFileSync(this.saveData, "utf8");
                var providers = sys.puts(JSON.parse(content));

                providers.forEach(function (account) {

                    switch (account.provider) {

                        case "GoDaddy":
                            _this.providers.append(new _domainProviders.GoDaddy(account.APIKey, account.APISecret));
                            break;
                        case "NameCheap":
                            _this.providers.append(new _domainProviders.NameCheap(account.APIKey, account.APISecret));

                    }
                });

                this.providers = _config2.default.providers;
            } catch (e) {

                console.error("failed to parse saved providers: ");
                console.error(e);
            }
        }
    }, {
        key: 'addProvider',
        value: function addProvider(p) {

            this.providers.append(p);
            _fs2.default.writeFileSync(this.saveData, this.providers);
        }
    }, {
        key: 'runAllUpdates',
        value: function runAllUpdates() {

            this.providers.forEach(function (provider) {

                provider.update();
            });
        }
    }]);

    return Updater;
}();

var updater = exports.updater = new Updater();