const { Command } = require('discord.js-commando');
// eslint-disable-next-line capitalized-comments
// const { MessageEmbed } = require('discord.js');

module.exports = class awaitReactions extends Command {
	constructor(client) {
		super(client, {
			name: 'await-reactions',
			aliases: ['rr2'],
			group: 'reaction-collectors',
			memberName: 'await-reactions',
			description: '(beta) Await Reactions',
			throttling: { usages: 1, duration: 60 }
		});
	}
	run(message) {
		const filter = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;

		message.awaitReactions(filter, { max: 4, time: 60000, errors: ['time'] })
			.then(collected => console.log(collected.size))
			.catch(collected => {
				console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
			});
	}
};
