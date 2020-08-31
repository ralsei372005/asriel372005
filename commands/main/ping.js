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
		message.channel.send('Pinging...').then($message => {
			$message.edit('', new MessageEmbed().
				setTimestamp().
				setColor('#ff0000').
				setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true})).
				addFields({
					name: '🤖 Bot Ping:',
					value: `${Math.floor($message.createdAt - message.createdAt)}ms`
				}, {
					name: '💻 Discord API Ping:',
					value: `${Math.floor(message.client.ws.ping)}ms`
				})
			);
		});
	}
};