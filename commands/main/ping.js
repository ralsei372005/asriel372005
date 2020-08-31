const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');

module.exports = class ping extends Command {
	constructor (client) {
		super(client, {
			name: 'ping',
			group: 'main',
			memberName: 'ping',
			description: 'Bot Ping & Discord API Ping'
		});
	}

	run (message) {
			const embed = new MessageEmbed().
			setTimestamp().
			setColor('#ff0000').
			setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}));
		message.channel.send(embed).then($message => {
			embed.addFields({
				name: '🤖 Bot Ping:',
				value: `${Math.floor($message.createdAt - message.createdAt)}ms`}, {
				name: '💻 Discord API (Application Programming Interface) Ping:',
				value: `${Math.floor(message.client.ws.ping)}ms`}
			);
			$message.edit('', embed);
		});
	}
};