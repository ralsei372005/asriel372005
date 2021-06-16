'use strict';

const {Command} = require('discord.js-commando');

module.exports = class del extends Command {
	constructor(client) {
		super(client, {
			name: 'del',
			group: 'admin',
			memberName: 'del',
			description: 'Bulk Delete Messages',
			guildOnly: true,
			clientPermissions: ['MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
			args: [{
				key: 'arg',
				prompt: '',
				type: 'integer',
				default: 0,
				validate: arg => arg >= 0 && arg <= 100
			}]
		});
	}

	run(message, {arg}) {
		if (arg < 100) {
			arg++;
		}

		message.channel.bulkDelete(arg);
	}
};
