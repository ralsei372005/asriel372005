const { Command } = require('discord.js-commando');
// eslint-disable-next-line capitalized-comments
// const { MessageEmbed } = require('discord.js');

module.exports = class basicReactionCollector extends Command {
	constructor(client) {
		super(client, {
			name: 'basicReactionCollector',
			aliases: ['rr1'],
			group: 'reactionCollectors',
			memberName: 'basicReactionCollector',
			description: '(beta) Basic Reaction Collector',
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
