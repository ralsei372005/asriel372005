const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'version',
			aliases: ['ver', 'v'],
			group: 'changelog',
			memberName: 'v',
			description: 'Bot Version and Change Logs!',
			throttling: {
				usages: 1,
				duration: 60,
			},
		});
	}
	run(message) {
		message.say('under maintenance');
	}
};

module.exports = {
	alts: ['ver', 'version'],
	info: '',
	time: 60000,
	run () {
		const {message} = require('../index');
		message.reply('under maintenance');
		// embed.
		// 	setTitle('Version: Alpha 0.1.0').
		// 	setDescription('Made by: hiccup372005').
		// 	addFields(
		// 		{name: 'Change Logs:', value: 'Running commands in DM is deprecated.'}
		// 	);
		// message.channel.send(embed);
	}
};