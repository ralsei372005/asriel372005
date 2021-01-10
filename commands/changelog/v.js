const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class v extends Command {
	constructor(client) {
		super(client, {
			name: 'version',
			aliases: ['ver', 'v'],
			group: 'changelog',
			memberName: 'v',
			description: 'Version & Developer',
			throttling: { usages: 1, duration: 3600 }
		});
	}
	run(message) {
		message.say(new MessageEmbed()
			.setTimestamp()
			.setColor('#ff0000')
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
			.setTitle('Version: 2020.46')
			.setDescription('Developer: hiccup372005')
			.addFields({
				name: 'Change Log',
				// eslint-disable-next-line max-len
				value: "tags will be back! with a cost...\n You see, to me personally repl.it is way better than heroku, mostly because heroku doesn't have the save file on disk concept. I used to store the files locally with sequelize and sqlite. Repl.it, however, every repl is public, every files is public except for the .env file which I store the discord bot token. If you want to use (create) tags, you must accept the fact that your user ID, tag name, tag description might be seen. No username or nickname will be stored, just user ID. DM me what you think."
			})
		);
	}
};
