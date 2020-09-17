//? Retarded. Finish other commands first.

// const { Command } = require('discord.js-commando');
// const { MessageEmbed } = require('discord.js');

// module.exports = class version extends Command {
// 	constructor (client) {
// 		super (client, {
// 			name: 'v',
// 			group: 'version',
// 			memberName: 'v',
// 			description: 'Version & Change Log!',
// 			throttling: {
// 				usages: 1,
// 				duration: 60
// 			}
// 		});
// 	}

// 	run (message) {
// 		message.say(new MessageEmbed()
// 			.setTimestamp()
// 			.setColor('#ff0000')
// 			.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
// 			.setTitle('Version: Alpha 0.2.0 ||v2020.09.17||')
// 			.setDescription('Made by: hiccup372005')
// 		);
// 	}
// };