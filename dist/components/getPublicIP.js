'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPublicIP = undefined;

require('request');

var getPublicIP = exports.getPublicIP = function getPublicIP(success, error) {

    var publicAPI = 'https://api.ipify.org?format=json';

    request.get(publicAPI, function (err, res, body) {

        if (err) {

            console.log("Error: " + err.message);
            error(err);
        } else {

            var json = JSON.parse(body);
            success(json['ip']);
        }
    });
};