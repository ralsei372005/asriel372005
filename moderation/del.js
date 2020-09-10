module.exports = {
	alts: ['delete', 'clear'],
	args: [1, '<Number>'],
	info: 'Bulk Delete <Number> Messages',
	perm: 'MANAGE_MESSAGES',
	guild: true,
	run () {
		const {message, args} = require('../index');

		let int = parseInt(args[1]) + 1;
		if (isNaN(int)) {
			return message.channel.send('Number Not Recognized.');
		} else if (int < 1) {
			return message.channel.send('Number Must Be Greater than 0');
		}
		if (int > 100) {
			int = 100;
		}
		message.guild.me.hasPermission('MANAGE_MESSAGES') ? message.channel.bulkDelete(int, true) : message.channel.send('Missing Permission: **`\'MANAGE_MESSAGES\'`**');
	}
};