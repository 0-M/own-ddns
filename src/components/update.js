
import config from '../config'
import fs from 'fs'
import { NameCheap, GoDaddy } from './domainProviders'


class Updater {

    Updater() {

        this.saveData = './savedProviders.json'
        this.providers = []
        this.loadProviders()
    
    }

    loadProviders() {

        try {

            // load saved file
            var content=fs.readFileSync(this.saveData, "utf8")
            let providers = sys.puts(JSON.parse(content))
            
            providers.forEach(account => {

                switch (account.provider) {

                case "GoDaddy":
                    this.providers.append(new GoDaddy(account.APIKey, account.APISecret))            
                    break
                case "NameCheap":
                    this.providers.append(new NameCheap(account.APIKey, account.APISecret))
                
                }
            
            })

            this.providers = config.providers

        } catch (e) {

            console.error("failed to parse saved providers: ")
            console.error(e)
        
        }
    
    }

    addProvider(p) {

        this.providers.append(p)
        fs.writeFileSync(this.saveData, this.providers)
    
    }

    runAllUpdates() {

        this.providers.forEach((provider) => {

            provider.update()
        
        })
    
    }

}


export let updater = new Updater()