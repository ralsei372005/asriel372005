module.exports = {
	info: 'Server Infomation!',
	time: 60000,
	guild: true,
	run () {
		const {message, embed} = require('../index');
		embed.
			setThumbnail(message.guild.iconURL({dynamic: true, size: 4096})).
			setTitle(message.guild.name).
			addFields(
				{name: 'Owner:', value: message.guild.owner, inline: true},
				{name: 'Members:', value: message.guild.memberCount, inline: true},
				{name: 'Created on:', value: Intl.DateTimeFormat('utc').format(message.guild.createdAt), inline: true},
				{name: 'Server ID:', value: message.guild.id},
				{name: 'Roles:', value: message.guild.roles.cache.
					filter(role => role.id !== message.guild.id).
					map(role => role).
					join(' ') || 'none'}
			);
		message.channel.send(embed);
	}
};