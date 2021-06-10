const fetch = require('node-fetch');
const {version} = require('../../package.json');
const {pfp, ranks} = require('../../config.json');
const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');

module.exports = class user extends Command {
	constructor(client) {
		super(client, {
			name: 'user',
			group: 'tetrio',
			memberName: 'user',
			description: 'TETR.IO user',
			args: [{
				key: 'user',
				prompt: 'TETR.IO username?',
				type: 'string',
				validate: user => /^[a-zA-Z0-9-_]{3,16}$/.test(user)
			}]
		});
	}

	async run(message, {arg}) {
		const response = await fetch(`https://ch.tetr.io/api/users/${arg}`).then(response => response.json());
		if (!response.success) {
			return message.say(response.error);
		}

		const {user, user: {league}} = response.data;
		message.say(new MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}))
			.setColor('#00ff00')
			.setTitle(`${user}'s TETR.IO`)
			.setURL(`https://ch.tetr.io/u/${user}`)
			.setFooter(`Ralsei372005's Discord Bot Version ${version}`, pfp)
			.setTimestamp()
			.setThumbnail(`https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}`)
			.addFields([
				{name: 'Online Games Played', value: user.gamesplayed, inline: true},
				{name: 'Online Games Won', value: user.gameswon, inline: true},
				{name: '\u200B', value: 'TETRA LEAGUE'},
				{name: 'Games Played', value: league.gamesplayed, inline: true},
				{name: 'Games Won', value: league.gameswon, inline: true},
				{name: '\u200B', value: '\u200B', inline: true},
				{name: 'Rating', value: `${league.rating.toFixed?.(2)} TR`, inline: true},
				{name: 'Glicko', value: `${league.glicko.toFixed?.(2)} ± ${league.rd?.toFixed?.(2)} RD`, inline: true},
				{name: 'Rank', value: ranks[league.rank], inline: true},
				{name: 'Attack Per Minute', value: league.apm, inline: true},
				{name: 'Pieces Per Second', value: league.pps, inline: true},
				{name: 'Versus Score', value: league.vs, inline: true}
			])
		);
	}
};
