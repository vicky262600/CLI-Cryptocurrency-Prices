const { program } = require('commander'); 
const key = require("../commands/key")

program
  .command('set') 
  .description('Set API Key -- Get a https://coinmarketcap.com')
  .action(key.set);

program
  .command('show') 
  .description('show API Key')
  .action(key.show);

program
  .command('remove') 
  .description('remove API Key')
  .action(key.remove);

program.parse(process.argv);
