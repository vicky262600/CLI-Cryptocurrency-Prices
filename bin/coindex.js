#!/usr/bin/env node
const { program } = require('commander');
const pkg = require("../package.json");

program
    .version(pkg.version)
    .command('key', 'manage API -- httpa://coinmarketcap.com')
    .command('check', 'Check Coin price info')
    .parse(process.argv);

// console.log("Har Har Mahadev");
// console.log(process.argv);