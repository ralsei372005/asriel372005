'use strict';

const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');
const {CommandoClient} = require('discord.js-commando');
const client = new CommandoClient({commandPrefix, owner});

require('dotenv').config();
require('http').createServer((_request, response) => {
	response.writeHead(200);
	response.end(`ralsei372005's Discord Bot Version ${version}`);
}).listen(3000);

client.login(process.env.token);
client.once('ready', () => {
	client.user.setActivity(`ralsei372005's Discord Bot Version ${version}`);
	console.log(`ralsei372005's Discord Bot Version ${version}`);
});

client.registry
	.registerDefaultTypes()
	.registerGroups(groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(require('path').join(__dirname, './commands'));
