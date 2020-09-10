module.exports = {
	args: [0, '[Nickname|Username]'],
	info: 'User & Member Infomation!',
	time: 15000,
	guild: true,
	run () {
		const {message, args, embed} = require('../index');
		let member;
		if (!args[1]) {
			member = message.member;
		} else if (message.guild) {
			args.shift();
			member = message.mentions.members.first() || message.guild.members.cache.find($member => $member.displayName.includes(args.join(' ')) || $member.user.tag.includes(args.join(' ')));
			if (!member) {
				return message.channel.send('Nickame or Username Not Recognized.');
			}
		} else {
			return message.channel.send('Server Not Recognized.');
		}

		embed.
			setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 4096})).
			setTitle(member.user.tag);

		if (message.guild) {
			embed.addFields(
				{name: 'Nickname: ', value: member.displayName, inline: true},
				{name: 'Joined on:', value: Intl.DateTimeFormat('utc').format(member.joinedAt), inline: true},
				{name: 'Roles:', value: member.roles.cache.
					filter(role => role.id !== message.guild.id).
					map(role => role).
					join(' ') || 'none'}
			);
		}

		embed.addFields(
			{name: 'Username:', value: member.user.tag, inline: true},
			{name: 'Created on:', value: Intl.DateTimeFormat('utc').format(member.user.createdAt), inline: true},
			{name: 'ID:', value: member.user.id}
		);

		message.channel.send(embed);
	}
};