'use strict';

// Require Discord.js Commando
const {Command} = require('discord.js-commando');

module.exports = class attack extends Command {
	constructor(client) {
		super(client, {
			name: 'attack',
			group: 'games',
			memberName: 'attack',
			description: 'Games Demo for Chriscj',
			guildOnly: true
		});
	}

	run(message) {
		const {attack} = require('../../index');
		attack.get(message.guild.id).then(value => {
			if (value) {
				attack.set(message.guild.id, value - 5);
			} else {
				attack.set(message.guild.id, 995);
			}

			message.say(`Sweet! You just destroyed the server :hearts: You inflicted 5 damages (${value - 5}/1000)`);
		});
	}
};
