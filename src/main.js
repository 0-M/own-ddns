
import './config'
import './components/update'

let timeout = config.timeout

setInterval(() => runAllUpdates(), timeout)