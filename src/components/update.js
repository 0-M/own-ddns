
import config from '../config'
import 'fs'
import { NameCheap, GoDaddy } from './domainProviders';


class Updater {

    Updater() {
        this.providers = []
        this.loadProviders()
    }

    loadProviders() {
        let providers = JSON.parse(fs.readFileSync('../savedProviders.json', 'utf8'));
        
        providers.forEach(account => {
            switch (account.provider) {
            case "GoDaddy":
                this.providers.append(new GoDaddy(account.APIKey, account.APISecret))            
                break;
            case "NameCheap":
                this.providers.append(new NameCheap(account.APIKey, account.APISecret))
            }
        })



        this.providers = config.providers
    }

    addProvider(p) {
        this.providers.append(p)
    }


}


export let updater = new Updater()