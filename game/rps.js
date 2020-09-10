const { Command } = require('discord.js-commando');

module.exports = class rng extends Command {
	constructor (client) {
		super(client, {
			name: 'rps',
			group: 'game',
			memberName: 'rps',
			description: 'Rock Paper Scissor!',
			throttling: {
				usages: 5,
				duration: 20
			},
			args: [
				{
					key: 'pick',
					prompt: '',
					type: 'string',
					default: '',
					oneOf: ['', 'r', 'p', 's', 'rock', 'paper', 'Scissors']
				}
			]
		});
	}

	run (message, { pick }) {
		const { embed } = require('../../index');
		const hand = ['Rock', 'Paper', 'Scissors' ][Math.floor(Math.random() * 3)];
		embed.setTitle(`${hand}!`);
		if (pick) {
			if (pick.toLowerCase().startsWith('r')) {
				pick = 'Rock';
			}
			if (pick.toLowerCase().startsWith('p')) {
				pick = 'Paper';
			}
			if (pick.toLowerCase().startsWith('s')) {
				pick = 'Scissors';
			}
			embed.setDescription(`${pick == hand ? 'It\'s a tie!' : `You ${pick.startsWith('R') && hand.startsWith('S') || pick.startsWith('P') && hand.startsWith('R') || pick.startsWith('S') && hand.startsWith('P') ? 'won!' : 'lost :('}`}`);
		}
		message.send(embed);
	}
};