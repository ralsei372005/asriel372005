//! Default to message.member.

// const { Command } = require('discord.js-commando');
// const { MessageEmbed } = require('discord.js');

// module.exports = class version extends Command {
// 	constructor (client) {
// 		super (client, {
// 			name: 'pfp',
// 			group: 'utility',
// 			memberName: 'pfp',
// 			description: 'Profile Picture!',
// 			throttling: {
// 				usages: 3,
// 				duration: 60
// 			},
// 			args: [
// 				{
// 					key: 'args',
// 					prompt: 'Number Range? Syntax: **`<begin>..<end>`**)',
// 					type: 'string',
// 					validate: range => /^\d+\.\.\d+$/.test(range)
// 				}
// 			]
// 		});
// 	}

// 	run (message, {args}) {
// 		let member;
// 		if (!args[1]) {
// 			member = message.member;
// 		} else {
// 			args.shift();
// 			member = message.mentions.members.first() || message.guild.members.cache.find($member => $member.displayName.toLowerCase().startsWith(args.join(' ').toLowerCase()) || $member.user.tag.toLowerCase().startsWith(args.join(' ').toLowerCase()));
// 		}
// 		if (!member) {
// 			return message.channel.send('Nickame or Username Not Recognized.');
// 		}
// 		message.channel.send(member.user.displayAvatarURL({format: 'png', dynamic: true, size: 4096}));
// 	}
// }