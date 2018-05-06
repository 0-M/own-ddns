import 'request'

export let getPublicIP = function(success, error) {

    let publicAPI = 'https://api.ipify.org?format=json'
 
    request.get(publicAPI, (err, res, body) => {
     
        
        if (err) {
            console.log("Error: " + err.message);
            error(err)
        } else {
            let json = JSON.parse(body)
            success(json['ip'])
        }
    }

}
