'use strict';

// Require Discord.js Commando
const {Command} = require('discord.js-commando');

module.exports = class attack extends Command {
	constructor(client) {
		super(client, {
			name: 'attack',
			group: 'chriscj',
			memberName: 'attack',
			description: 'Chriscj Attack',
			guildOnly: true
		});
	}

	run(message) {
		const {asriel372005} = require('../../index');
		asriel372005.get(message.guild.id).then(value => {
			if (!value) {
				value = 1000;
			}

			const damage = Math.floor(Math.random() * 5);
			const random = [
				`Sweet! You just did a rookie attack :hearts: You inflicted 1 damages (${value - 1}/1000)`,
				`owo you did the newbie attack :hearts: You inflicted 2 damages (${value - 2}/1000)`,
				`oof you did the trained attack :hearts: You inflicted 3 damages (${value - 3}/1000)`,
				`Erm you did the skilled attack :hearts: You inflicted 4 damages (${value - 4}/1000)`,
				`Eww you did a pro attack :hearts: You inflicted 5 damages (${value - 5}/1000)`
			];
			asriel372005.set(message.guild.id, value - damage - 1);
			message.say(random[damage]);
		});
	}
};
