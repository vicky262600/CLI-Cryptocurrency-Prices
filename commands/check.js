const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const cryptoAPI = require('../lib/cryptoAPI')

const check = {
    async price(cmd){
        try{
            let keyManager = new KeyManager();
            const key = keyManager.getKey();
            
            const api = new cryptoAPI(key);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);
            console.log(priceOutputData);
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = check;