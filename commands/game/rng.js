module.exports = {
	alts: ['random'],
	args: [2, '<Begin> <End>'],
	info: 'Random Number Generator! Generate Random Number Between <Begin> and <End>',
	run () {
		const {message, args, embed} = require('../index');
		const $1 = parseInt(args[1]), $2 = parseInt(args[2]);
		embed.setTitle(Math.floor(Math.random() * ($2 - $1 + 1)) + $1);
		message.channel.send(embed);
	}
};