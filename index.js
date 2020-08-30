const {CommandoClient} = require('discord.js-commando');
const path = require('path');
const {MessageEmbed} = require('discord.js');

const client = new CommandoClient({
	commandPrefix: 'c3',
	owner: '379643682984296448'
});

client.registry.
	registerDefaultTypes().
	registerGroups([
		['main', 'Main!'],
		['utility', 'Utilities!'],
		['changelog', 'Change Logs!'],
		['game', 'Games!'],
		['moderation', 'Moderations Commands!']
	]).
	registerDefaultGroups().
	registerDefaultCommands().
	registerCommandsIn(path.join(__dirname, 'commands'));


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity('with Commando');
});

client.on('message', message => {
	const embed = new MessageEmbed().
		setTimestamp().
		setColor('#ff0000').
		setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}));
	module.exports = {embed};
});

client.login('NzQ4OTIxNDgyMTIxMzE0MzE0.X0kdew.xTvoo_uFn1AktecMhVzC0IKNW-E');