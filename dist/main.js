'use strict';

var _config = require('./config');

var _update = require('./components/update');

var updateInterval = _config.config.updateInterval;

_update.updater.loadProviders();

setInterval(function () {

    _update.updater.runAllUpdates();
}, updateInterval);