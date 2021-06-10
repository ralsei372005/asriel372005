require('dotenv').config();
const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');
const {CommandoClient} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix,
	owner
});

client.registry
	.registerDefaultTypes()
	.registerGroups(groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log('✅');
	client.user.setActivity(`ralsei372005's Discord Bot Version ${version}`);
});

client.login(process.env.token);

const http = require('http');
http.createServer((_request, response) => {
	response.writeHead(200);
	response.end(`ralsei372005's Discord Bot Version ${version}`);
}).listen(3000);
