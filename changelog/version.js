const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class version extends Command {
	constructor (client) {
		super (client, {
			name: 'version',
			aliases: ['ver', 'v'],
			group: 'changelog',
			memberName: 'version',
			description: 'Bot Version and Change Logs!',
			throttling: {
				usages: 1,
				duration: 60
			}
		});
	}

	run (message) {
		message.say(new MessageEmbed()
			.setTimestamp()
			.setColor('#ff0000')
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
			.setTitle('Version: Alpha 0.1.0')
			.setDescription('Made by: hiccup372005')
			.addFields({
				name: 'Change Logs:',
				value: 'yes.'
			})
		);
	}
};