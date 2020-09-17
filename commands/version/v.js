// * v2020.9.17

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class version extends Command {
	constructor (client) {
		super (client, {
			name: 'version',
			aliases: ['ver', 'v'],
			group: 'version',
			memberName: 'v',
			description: 'Version & Change Log!',
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
			.setTitle('Version: 2020.9.17 | Alpha 0.2.0')
			.setDescription('Made by: hiccup372005')
			.addFields(
				{
					name: 'Change Logs:',
					value: 'Today, I\'m introducing a new **`YYYY.MM.DD`** naming convention ~~||totally not copied from Among Us naming convention.||~~)\nThe new naming convention let you know the last time I updated my bot and chriscj please stop telling people that my bot version sky rocket and jumping version.'
				},
				{
					name: 'Technical Changes:',
					value: 'Completely migrated from discord.js to discord.js/commando\nSome commands are missing, mostly because no one use them or commando has a built-in command. DM me if you want any of them back.\nThe old discord.js bot source code is now available publicly on Github @ https://github.com/hiccup372005/toothless372005-old\nI regenarate the token every week and the token in the source code is outdated.'
				}
			)
		);
	}
};