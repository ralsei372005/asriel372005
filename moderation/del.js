// * v2020.09.17

const { Command } = require('discord.js-commando');

module.exports = class del extends Command {
	constructor (client) {
		super (client, {
			name: 'del',
			aliases: ['delete', 'clear'],
			group: 'moderation',
			memberName: 'bulkDelete',
			description: 'Bulk Delete Messages',
			throttling: {
				usage: 2,
				duration: 10
			},
			guildOnly: true,
			clientPermissions: ['MANAGE_MESSAGES'],
			userPermissions: ['MANAGE_MESSAGES'],
			args: [
				{
					key: 'int',
					prompt: 'Number Of Messages To Bulk Delete?',
					type: 'integer',
					validate: int => int > 0
				}
			]
		});
	}

	run (message, { int }) {
		int++;
		if (int > 100) {
			int = 100;
		}
		message.channel.bulkDelete(int, true);
	}
};