const date = new Date();
const [year, month, day, hour, minutes, seconds] = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];

require('dotenv').config();

require('https').createServer((_request, response) => {
	response.writeHead(200);
	response.end(`ralsei372005's Discord Bot Version ${version}\n${year}.${month}.${day} ${hour}:${minutes}:${seconds}`);
}).listen(3000);

const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');

const {CommandoClient} = require('discord.js-commando');
const {join} = require('path');

const client = new CommandoClient({commandPrefix, owner});

client.login(process.env.token);

client.once('ready', () => {
	console.log(`ralsei372005's Discord Bot Version ${version}\n${year}.${month}.${day} ${hour}:${minutes}:${seconds}`);
	client.user.setActivity(`ralsei372005's Discord Bot Version ${version}`);
});

client.registry
	.registerDefaultTypes()
	.registerGroups(groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(join(__dirname, './commands'));
