const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class v extends Command {
	constructor(client) {
		super(client, {
			name: 'version',
			aliases: ['ver', 'v'],
			group: 'changelog',
			memberName: 'v',
			description: 'Version & Developer',
			throttling: { usages: 1, duration: 3600 }
		});
	}
	run(message) {
		message.say(new MessageEmbed()
			.setTimestamp()
			.setColor('#ff0000')
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
			.setTitle('Version: 2021.04.19')
			.setDescription('Developer: Ralsei372005')
			.addFields({
				name: 'Change Log',
				// eslint-disable-next-line max-len
				value: 'Rename Hiccup372005 to Ralsei372005 and Toothless372005 to Asriel372005\nI still love How to Train Your Dragon though. I just love Toby Fox anagrams.'
			})
		);
	}
};
