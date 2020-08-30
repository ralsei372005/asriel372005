module.exports = {
	alts: ['flip'],
	args: [0, '[h|t]'],
	info: 'Flip a coin!',
	run () {
		const {message, args, embed} = require('../index');
		const coin = ['Heads', 'Tails'][Math.round(Math.random())];
		embed.setTitle(`${coin}!`);
		if (args[1]) {
			if (args[1].toLowerCase().startsWith('h')) {
				args[1] = 'Heads';
			}
			if (args[1].toLowerCase().startsWith('t')) {
				args[1] = 'Tails';
			}
			embed.setDescription(`You ${args[1] == coin ? 'won!' : 'lost :('}`);
		}
		message.channel.send(embed);
	}
};