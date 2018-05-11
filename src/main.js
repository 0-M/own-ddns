
import {config} from './config'
import {updater} from './components/update'

let updateInterval = config.updateInterval

updater.loadProviders()

setInterval(function(){

    updater.runAllUpdates() 

}, updateInterval)