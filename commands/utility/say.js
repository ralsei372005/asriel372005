module.exports = {
	args: [1, '<Message>'],
	info: 'Say a message & I will say it!',
	time: 15000,
	run () {
		const {message, args, embed} = require('../index');
		args.shift();
		if (args.join(' ').length < 256) {
			embed.setTitle(args.join(' '));
		} else {
			embed.setDescription(args.join(' '));
		}
		message.channel.send(embed);
	}
};