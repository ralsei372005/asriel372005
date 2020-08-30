const {Command} = require('discord.js-commando');

module.exports = class rng extends Command {
	constructor (client) {
		super(client, {
			name: 'rng',
			group: 'game',
			memberName: 'rgn',
			description: 'Random Number Generator! Generate Random Number range <begin>..<end>',
			throttling: {
				usages: 2,
				duration: 10
			},
			args: [
				{
					key: 'range',
					prompt: 'Number Range? (Syntax: **`<begin>..<end>`**)',
					type: 'string',
					validate: range => {
						return /^\d+..\d+$/.test(range);
					}
				}
			]
		});
	}

	run (message, {range}) {
		const {embed} = require('../../index');
		const begin = parseInt(range.split('..')[0]);
		const end = parseInt(range.split('..')[0]);
		embed.setTitle(Math.floor(Math.random() * (end - begin + 1)) + begin);
		message.say(embed);
	}
};