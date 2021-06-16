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
			}, {
				key: 'raw',
				prompt: '',
				type: 'string',
				default: '',
				oneOf: ['', 'raw']
			}]
		});
	}

	async run(message, {username, raw}) {
		const embed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}))
			.setColor('#00ff00')
			.setFooter(`Ralsei372005's Discord Bot Version ${version}`, pfp)
			.setTimestamp();

		const info = await fetch(`https://ch.tetr.io/api/users/${username.toLowerCase()}`).then(response => response.json());
		if (!info.success) {
			embed.setTitle(info.error);
			return message.say(embed);
		}

		const records = await fetch(`https://ch.tetr.io/api/users/${username.toLowerCase()}/records`).then(response => response.json());
		if (!records.success) {
			embed.setTitle(records.error);
			return message.say(embed);
		}

		const {data: {user, user: {league, league: {rating, glicko, rank, apm, pps, vs}}}} = info;
		const finalTime = records.data.records['40l'].record && records.data.records['40l'].record.endcontext.finalTime;
		const score = records.data.records.blitz.record && records.data.records.blitz.record.endcontext.score;

		embed
			.setTitle(toEmojis(username.toUpperCase(), raw))
			.setThumbnail(`https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}`)
			.addField('Online Games Played', toEmojis(user.gamesplayed, raw), true)
			.addField('Online Games Won', toEmojis(user.gameswon, raw), true)
			.addField('\u200B', '\u200B', true)
			.addField('Tetra League Games Played', toEmojis(league.gamesplayed, raw), true)
			.addField('Tetra League Games Won', toEmojis(league.gameswon, raw), true)
			.addField('\u200B', '\u200B', true);

		if (rating && glicko && rank) {
			embed
				.addField('Rating', toEmojis(rating.toFixed(0), raw), true)
				.addField('Glicko', toEmojis(glicko.toFixed(0), raw), true)
				.addField('Rank', ranks[rank], true);
		}

		if (apm && pps && vs) {
			embed
				.addField('Attack Per Minute', toEmojis(apm, raw), true)
				.addField('Pieces Per Second', toEmojis(pps, raw), true)
				.addField('Versus Score', toEmojis(vs, raw), true);
		}

		if (finalTime) {
			embed.addField('40 Lines', toEmojis(`${(finalTime / 60000).toFixed(0)}:${finalTime % 60000 < 10000 ? '0' : ''}${(finalTime % 60000 / 1000).toFixed(3)}`, raw), true);
		}

		if (score) {
			embed.addField('Blitz', toEmojis(score, raw), true);
		}

		if (raw) {
			message.say(embed);
		} else {
			message.say(`\`asriel user ${username} raw\` for raw numbers and letters instead of emojis`, {embed});
		}
	}
};

function toEmojis(arg, raw) {
	if (raw) {
		return arg;
	}

	let result = '';
	for (const char of arg.toString()) {
		result += emojis[char];
		result += ' ';
	}

	return result;
}
