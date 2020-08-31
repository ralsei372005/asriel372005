const {Command} = require('discord.js-commando');

module.exports = class coin extends Command {
	constructor (client) {
		super(client, {
			name: 'coin',
			aliases: ['flip'],
			group: 'game',
			memberName: 'coin',
			description: 'Flip a coin!',
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
					oneOf: ['', 'h', 't', 'head', 'tail', 'heads', 'tails']
				}
			]
		});
	}
	run (message, {pick}) {
		const {embed} = require('../../index');
		const $coin = ['Heads', 'Tails'][Math.round(Math.random())];
		embed.setTitle(`${$coin}!`);
		if (pick) {
			if (pick.toLowerCase().startsWith('h')) {
				pick = 'Heads';
			}
			if (pick.toLowerCase().startsWith('t')) {
				pick = 'Tails';
			}
			embed.setDescription(`You ${pick == $coin ? 'won!' : 'lost :('}`);
		}
		message.say(embed);
	}
};