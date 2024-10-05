const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');

const key ={
    async set(){
        const keyManager = KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter An ApiKey'.green + 'https://nomic.com'
            }
        ]);
        const key = keyManager.setKey(input.key);
        if(key){
            console.log('Api key found'.blue);
        }
    },
    show(){
        console.log('me show')
    },
    remove(){
        console.log('me remove')
    }
}

module.exports = key;