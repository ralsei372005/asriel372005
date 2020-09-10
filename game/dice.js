const { Command } = require('discord.js-commando');

module.exports = class dice extends Command {
	constructor (client) {
		super(client, {
			name: 'dice',
			aliases: ['roll'],
			group: 'game',
			memberName: 'dice',
			description: 'Roll a dice!',
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
					oneOf: ['', '1', '2', '3', '4', '5', '6', 'one', 'two', 'three', 'four', 'five', 'six']
				}
			]
		});
	}
	run (message, { pick }) {
		const { embed } = require('../../index');
		const $dice = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'][Math.floor(Math.random() * 6)];
		embed.setTitle(`${$dice}!`);
		if (pick) {
			if (!isNaN(pick)) {
				pick = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'][pick - 1];
			}
			embed.setDescription(`You ${pick == $dice ? 'won!' : 'lost :('}`);
		}
		message.say(embed);
	}
};