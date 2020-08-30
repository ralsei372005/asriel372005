module.exports = {
	alts: ['roll'],
	args: [0, '[1|2|3|4|5|6]'],
	info: 'Roll a dice!',
	run () {
		const {message, args, embed} = require('../index');
		const dice = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'][Math.floor(Math.random() * 6)];
		embed.setTitle(`${dice}!`);
		if (args[1]) {
			if (!isNaN(args[1])) {
				args[1] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'][args[1] - 1];
			}
			embed.setDescription(`You ${args[1].toLowerCase() == dice.toLowerCase() ? 'won!' : 'lost :('}`);
		}
		message.channel.send(embed);
	}
};