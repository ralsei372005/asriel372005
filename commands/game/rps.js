module.exports = {
	args: [0, '[r|p|s]'],
	info: 'Rock Paper Scissor!',
	run () {
		const {message, args, embed} = require('../index');
		const hand = ['Rock', 'Paper', 'Scissors' ][Math.floor(Math.random() * 3)];
		embed.setTitle(`${hand}!`);
		if (args[1]) {
			if (args[1].toLowerCase().startsWith('r')) {
				args[1] = 'Rock';
			}
			if (args[1].toLowerCase().startsWith('p')) {
				args[1] = 'Paper';
			}
			if (args[1].toLowerCase().startsWith('s')) {
				args[1] = 'Scissors';
			}
			embed.setDescription(`${args[1] == hand ? 'It\'s a tie!' : `You ${args[1].startsWith('R') && hand.startsWith('S') || args[1].startsWith('P') && hand.startsWith('R') || args[1].startsWith('S') && hand.startsWith('P') ? 'won!' : 'lost :('}`}`);
		}
		message.send(embed);
	}
};