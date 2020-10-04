// * v2020.10.4

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
				duration: 3600
			}
		});
	}
	run (message) {
		message.say(new MessageEmbed().
			setTimestamp().
			setColor('#ff0000').
			setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true })).
			setTitle('Version: 2020.10.4').
			setDescription('Made by: hiccup372005').
			addFields(
				{
					name: 'Change Logs',
					value: 'default prefix: "t3"\nRe-add t3mc for potential minecraft 1.17 Caves & Cliffs update.\n~~Glitch~~ is no more, Heroku sucks according to ChrisCJ and UK(nown) is using Heroku, Entering Repl.it'
				}
			)
		);
	}
};