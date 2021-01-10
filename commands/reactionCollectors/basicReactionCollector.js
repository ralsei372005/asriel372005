const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class reactionRole extends Command {
	constructor(client) {
		super(client, {
			name: 'reaction-role',
			aliases: ['reaction_role', 'rr'],
			group: 'reaction-role',
			memberName: 'reaction_role',
			description: 'Reaction Role',
			throttling: { usages: 1, duration: 60 }
		});
	}
	run(message) {
		const filter = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;

		const collector = message.createReactionCollector(filter, { time: 15000 });

		collector.on('collect', (reaction, user) => {
			console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
		});

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
		});
	}
};
