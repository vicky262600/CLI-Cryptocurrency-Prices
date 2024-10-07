const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const {isRequierd} = require('../utils/validation');

const key ={
    async set(){
        const keyManager = new KeyManager();
        try {
            const input = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'key',
                    message: 'Enter An ApiKey '.green + 'https://coinmarketcap.com',
                    validate: isRequierd
                }
            ]);
            const key = keyManager.setKey(input.key);
            if (key) {
                console.log('API key found'.blue);
            }
        } catch (error) {
            console.error('Error:', error.message.red);
        }
    },
    show(){
        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current API Key', key.yellow);
            return key
        }catch(err){
            console.error(err.message.red);
        }
    },
    remove(){
        try{
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log("Key has been deleted". blue);     
            return;       
        }catch(err){
            console.error(err.message.red);
        }
    }
}

module.exports = key;