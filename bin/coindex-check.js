const { program } = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add specific coin type in CSV format', 'BTC,ETH,SOL')
    .option('--cur <currency>', 'change the currency', 'USD' )
    .action((cmd)=>check.price(cmd));

program.parse(process.argv);