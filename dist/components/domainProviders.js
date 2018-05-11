"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NameCheap = exports.GoDaddy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("request");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomainProvider = function () {
    function DomainProvider() {
        _classCallCheck(this, DomainProvider);
    }

    _createClass(DomainProvider, [{
        key: "DomainProvider",
        value: function DomainProvider(APIKey, APISecret) {

            this.APIKey = APIKey;
            this.APISecret = APISecret;
        }
    }, {
        key: "update",
        value: function update() {

            console.log("update not implemented");
        }
    }]);

    return DomainProvider;
}();

var GoDaddy = exports.GoDaddy = function (_DomainProvider) {
    _inherits(GoDaddy, _DomainProvider);

    function GoDaddy() {
        _classCallCheck(this, GoDaddy);

        return _possibleConstructorReturn(this, (GoDaddy.__proto__ || Object.getPrototypeOf(GoDaddy)).apply(this, arguments));
    }

    _createClass(GoDaddy, [{
        key: "getUpdateURL",
        value: function getUpdateURL() {}
    }, {
        key: "getBody",
        value: function getBody() {

            return {};
        }
    }, {
        key: "getAuthHeader",
        value: function getAuthHeader() {

            return "Authorization: sso-key " + this.APIKey + ":" + this.APISecret;
        }
    }, {
        key: "update",
        value: function update() {

            console.log("calling GoDaddy API");
        }
    }]);

    return GoDaddy;
}(DomainProvider);

var NameCheap = exports.NameCheap = function (_DomainProvider2) {
    _inherits(NameCheap, _DomainProvider2);

    function NameCheap() {
        _classCallCheck(this, NameCheap);

        return _possibleConstructorReturn(this, (NameCheap.__proto__ || Object.getPrototypeOf(NameCheap)).apply(this, arguments));
    }

    _createClass(NameCheap, [{
        key: "getHostRecords",
        value: function getHostRecords() {

            // must be done before calling setHosts

            // TODO: call API and get XML
            var responseXML = "<whyXMLin2018>no good reason</whyXMLin2018>";
            this.hostRecords = responseXML;
        }
    }, {
        key: "getBody",
        value: function getBody() {

            var body = this.hostRecords;
            // manipulate XML to change the values you want 
            return body;
        }
    }]);

    return NameCheap;
}(DomainProvider);