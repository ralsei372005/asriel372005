const fetch = require('node-fetch');
const {version} = require('../../package.json');
const {pfp, ranks, emojis} = require('../../config.json');
const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');

module.exports = class user extends Command {
	constructor(client) {
		super(client, {
			name: 'user',
			group: 'tetrio',
			memberName: 'user',
			description: 'TETR.IO User Info & Records',
			args: [{
				key: 'username',
				prompt: 'TETR.IO Username?',
				type: 'string',
				validate: username => /^[a-zA-Z0-9-_]{3,16}$/.test(username)
			}]
		});
	}

	async run(message, {username}) {
		username = username.toLowerCase();
		const embed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}))
			.setColor('#00ff00')
			.setFooter(`Ralsei372005's Discord Bot Version ${version}`, pfp)
			.setTimestamp();

		const info = await fetch(`https://ch.tetr.io/api/users/${username}`).then(response => response.json());
		if (!info.success) {
			embed.setTitle(info.error);
			return message.say(embed);
		}

		const records = await fetch(`https://ch.tetr.io/api/users/${username}/records`).then(response => response.json());
		if (!records.success) {
			embed.setTitle(records.error);
			return message.say(embed);
		}

		const {data: {user, user: {league}}} = info;

		const score = records.data.records.blitz.record && records.data.records.blitz.record.endcontext.score;
		embed
			.setTitle(username)
			.setURL(`https://ch.tetr.io/u/${username}`)
			.setThumbnail(`https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}`)
			.addFields([
				{name: 'Online Games Played', value: toEmojis(user.gamesplayed), inline: true},
				{name: 'Online Games Won', value: toEmojis(user.gameswon), inline: true},
				{name: '\u200B', value: 'TETRA LEAGUE'},
				{name: 'Games Played', value: toEmojis(league.gamesplayed), inline: true},
				{name: 'Games Won', value: toEmojis(league.gameswon), inline: true},
				{name: '\u200B', value: '\u200B', inline: true},
				{name: 'Rating', value: `${toEmojis(league.rating?.toFixed(0))} TR`, inline: true},
				{name: 'Glicko', value: `${toEmojis(league.glicko?.toFixed(0))} ± ${toEmojis(league.rd?.toFixed(0))}`, inline: true},
				{name: 'Rank', value: ranks[league.rank], inline: true},
				{name: 'Attack Per Minute', value: toEmojis(league.apm), inline: true},
				{name: 'Pieces Per Second', value: toEmojis(league.pps), inline: true},
				{name: 'Versus Score', value: toEmojis(league.vs), inline: true}
			]);
		if (records.data.records['40l'].record || records.data.records.blitz.record) {
			embed.addField('\u200B', 'RECORDS');
		}

		if (records.data.records['40l'].record) {
			const {data: {records: {'40l': {record: {endcontext: {finalTime}}}}}} = records;
			embed.addField('40 Lines', toEmojis(`${(finalTime / 60000).toFixed(0)}:${finalTime % 60000 < 10000 ? '0' : ''}${(finalTime % 60000 / 1000).toFixed(3)}`), true);
		}

		if (records.data.records.blitz.record) {
			embed.addField('Blitz', toEmojis(score), true);
		}

		message.say(embed);
	}
};

function toEmojis(arg) {
	if (!arg) {
		return arg;
	}

	let string = '';
	for (const char of arg.toString()) {
		string += emojis[char];
	}

	return string;
}
