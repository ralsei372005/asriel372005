require('dotenv').config();

const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');

const {CommandoClient} = require('discord.js-commando');
const {join} = require('path');

const client = new CommandoClient({
	commandPrefix,
	owner
});

client.registry
	.registerDefaultTypes()
	.registerGroups(groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(join(__dirname, './commands'));

client.once('ready', () => {
	console.log(`ralsei372005's Discord Bot Version ${version}`);
	client.user.setActivity(`ralsei372005's Discord Bot Version ${version}`);
});

client.on('error', console.error);

client.login(process.env.token);

require('https').createServer((_request, response) => {
	response.writeHead(200);
	response.end(`ralsei372005's Discord Bot Version ${version}`);
});
