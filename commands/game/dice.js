const {Command} = require('discord.js-commando');

module.exports = class coin extends Command {
	constructor (client) {
		super(client, {
			name: 'dice',
			aliases: ['roll'],
			group: 'game',
			memberName: 'dice',
			description: 'Roll a dice!',
			throttling: {
				usages: 2,
				duration: 10
			},
			args: [
				{
					key: 'pick',
					prompt: 'testing',
					type: 'string',
					default: ''
				}
			]
		});
	}
	run (message, {pick}) {
		const {embed} = require('../../index');
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