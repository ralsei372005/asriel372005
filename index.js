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

client.login('NTMyNTQ5NDcxMjEzNTg0Mzk1.XDX1WA.qS5278OmNVk8c1gkzcJo4QrYTS8');