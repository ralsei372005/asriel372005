require('dotenv').config();
const http = require('http');
const path = require('path');
const { CommandoClient } = require('discord.js-commando');

const client = new CommandoClient({
	commandPrefix: 't3',
	owner: '379643682984296448'
});

// eslint-disable-next-line no-process-env
client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log('ready');
	client.user.setActivity("t3help | hiccup372005's Discord Bot");
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['admin', 'Admin Commands'],
		['general', 'General Commands!'],
		['changelog', 'Version & Change Log!']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

http.createServer((_request, respond) => {
	respond.writeHead(200);
	respond.end('ok');
}).listen(3000);
