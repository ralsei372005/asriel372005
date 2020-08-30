const { CommandoClient, GuildSettingsHelper } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: 'c3',
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
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

	client.once('ready', () => {
		console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
		client.user.setActivity('with Commando');
	});
	
	client.on('error', console.error);

	client.login('NzQ4OTIxNDgyMTIxMzE0MzE0.X0kdew.xTvoo_uFn1AktecMhVzC0IKNW-E');