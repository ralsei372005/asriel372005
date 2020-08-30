const {Command} = require('discord.js-commando');

module.exports = class version extends Command {
	constructor (client) {
		super(client, {
			name: 'version',
			aliases: ['ver', 'v'],
			group: 'changelog',
			memberName: 'version',
			description: 'Bot Version and Change Logs!',
			throttling: {
				usages: 1,
				duration: 60
			}
		});
	}
	run (message) {
		const {embed} = require('../../index');
		embed.
			setTitle('Version: Alpha 0.1.0').
			setDescription('Made by: hiccup372005').
			addFields(
				{name: 'Change Logs:', value: '~~Stable: Running commands in DM is deprecated.~~\nMaster: Migrating commands to commando.'}
			);
		message.say(embed);
	}
};