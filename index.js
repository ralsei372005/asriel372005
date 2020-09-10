const { CommandoClient } = require('discord.js-commando');

const client = new CommandoClient({
	commandPrefix: '37',
	owner: '379643682984296448'
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['main', 'Main!'],
		['utility', 'Utilities!'],
		['changelog', 'Change Logs!'],
		['game', 'Games!'],
		['moderation', 'Moderations Commands!']
	])
	.registerDefaultGroups()
	.registerDefaultCommands({
		ping: false
	})
	.registerCommandsIn(__dirname);


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('with Commando');
});

client.login('NzQ4OTIxNDgyMTIxMzE0MzE0.X0kdew.xTvoo_uFn1AktecMhVzC0IKNW-E');