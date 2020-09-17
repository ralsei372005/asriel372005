// * v2020.9.17

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class user extends Command {
	constructor (client) {
		super (client, {
			name: 'user',
			aliases: ['member'],
			group: 'utility',
			memberName: 'member',
			description: 'User & Member Infomation!',
			throttling: {
				usages: 3,
				duration: 60
			},
			guildOnly: true,
			args: [
				{
					key: 'user',
					prompt: '',
					type: 'string',
					default: ''
				}
			]

		});
	}

	run (message, { member }) {
		if (!member) {
			member = message.member;
		} else {
			member = message.mentions.members.first() || message.guild.members.cache.find($member => $member.displayName.toLowerCase().startsWith(member.toLowerCase()) || $member.user.tag.toLowerCase.startsWith(member.toLowerCase()));
		}
		if (!member) {
			return message.channel.send('Member Not Found.');
		}
		message.say(new MessageEmbed()
			.setTimestamp()
			.setColor('#ff0000')
			.setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true }))
			.setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
			.setTitle(member.user.tag)
			.addFields(
				{
					name: 'Nickname: ',
					value: member.displayName,
					inline: true
				},
				{
					name: 'Joined on: ',
					value: Intl.DateTimeFormat('utc').format(member.joinedAt),
					inline: true
				},
				{
					name: 'Roles: ',
					value: member.roles.cache
						.filter(role => role.id !== message.guild.id)
						.map(role => role)
						.join(' ') || 'none'
				},
				{
					name: 'Username:',
					value: member.user.tag,
					inline: true
				},
				{
					name: 'Created on:',
					value: Intl.DateTimeFormat('utc').format(member.user.createdAt),
					inline: true
				},
				{
					name: 'ID:',
					value: member.user.id
				}
			)
		);
	}
};