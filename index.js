const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: 't3',
	owner: '379643682984296448'
});

client.registry.
	registerDefaultTypes().
	registerGroups([
		['utility', 'Utilities!'],
		['version', 'Version & Change Log!'],
		['moderation', 'Moderations Commands!']
	]).
	registerDefaultGroups().
	registerDefaultCommands().
	registerCommandsIn(path.join(__dirname, 'commands'));


client.on('ready', () => {
	console.log('ready');
	client.user.setActivity('t3help | hiccup372005\'s Discord Bot');
});

client.login(process.env.TOKEN);

const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(200);
	res.end('ok');
});
server.listen(3000);