module.exports = {
	alts: ['avatar'],
	args: [0, '[Nickname|Username]'],
	info: 'Profile Picture!',
	time: 15000,
	guild: true,
	run () {
		const {message, args} = require('../index');
		let member;
		if (!args[1]) {
			member = message.member;
		} else {
			args.shift();
			member = message.mentions.members.first() || message.guild.members.cache.find($member => $member.displayName.toLowerCase().startsWith(args.join(' ').toLowerCase()) || $member.user.tag.toLowerCase().startsWith(args.join(' ').toLowerCase()));
		}
		if (!member) {
			return message.channel.send('Nickame or Username Not Recognized.');
		}
		message.channel.send(member.user.displayAvatarURL({format: 'png', dynamic: true, size: 4096}));
	}
};