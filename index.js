const date = new Date();
const [year, month, day, hour, minutes, seconds] = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];

require('dotenv').config();
require('https').createServer((_request, response) => {
	response.write(`ralsei372005's Discord Bot Version ${version}`);
	response.write(`${year}.${month}.${day} ${hour}:${minutes}:${seconds}`);
	response.writeHead(200);
	response.end();
}).listen(3000);

const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');
const {CommandoClient} = require('discord.js-commando');
const client = new CommandoClient({commandPrefix, owner});

client.login(process.env.token);
client.once('ready', () => {
	client.user.setActivity(`ralsei372005's Discord Bot Version ${version}`);
	console.log(`ralsei372005's Discord Bot Version ${version}`);
	console.log(`${year}.${month}.${day} ${hour}:${minutes}:${seconds}`);
});

client.registry
	.registerDefaultTypes()
	.registerGroups(groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(require('path').join(__dirname, './commands'));
