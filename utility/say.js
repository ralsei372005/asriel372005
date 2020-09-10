const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class say extends Command {
	constructor (client) {
		super(client, {
			name: 'ping',
			group: 'utility',
			memberName: 'say',
			description: 'Replies with the text you provide.',
			throttling: {
				usages: 2,
				duration: 10
			},
			args: [
				{
					key: 'say',
					prompt: 'What text would you like the bot to say?',
					type: 'string',
				}
			]
		});
	}

	run (message, {say}) {
		const embed = message.channel.send(new MessageEmbed()
		.setTimestamp()
		.setColor('#ff0000')
		.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true})));
		if (say.length < 256) {
			embed.setTitle(say);
				
			));
		} else {
			embed.setDescription(args.join(' '));
		}
		message.channel.send(embed);
		
		message.channel.send('Pinging...').then($message => {
			$message.edit('', new MessageEmbed()
				.setTimestamp()
				.setColor('#ff0000')
				.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
				.addFields({
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