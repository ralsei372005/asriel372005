'use strict';

const {version} = require('../../package.json');
const {pfp, ranks, emojis} = require('../../config.json');
const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');
const fetch = require('node-fetch');

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
				key: 'emoji',
				prompt: 'Emoji?',
				type: 'boolean',
				default: true,
				oneOf: [true, false]
			}]
		});
	}

	async run(message, {username, emoji}) {
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
			.setTitle(toEmojis(username.toUpperCase(), emoji))
			.setThumbnail(`https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}`)
			.addField('Online Games Played', toEmojis(user.gamesplayed, emoji), true)
			.addField('Online Games Won', toEmojis(user.gameswon, emoji), true)
			.addField('\u200B', '\u200B', true)
			.addField('Tetra League Games Played', toEmojis(league.gamesplayed, emoji), true)
			.addField('Tetra League Games Won', toEmojis(league.gameswon, emoji), true)
			.addField('\u200B', '\u200B', true);

		if (rating && glicko && rank) {
			embed
				.addField('Rating', toEmojis(rating.toFixed(0), emoji), true)
				.addField('Glicko', toEmojis(glicko.toFixed(0), emoji), true)
				.addField('Rank', ranks[rank], true);
		}

		if (apm && pps && vs) {
			embed
				.addField('Attack Per Minute', toEmojis(apm, emoji), true)
				.addField('Pieces Per Second', toEmojis(pps, emoji), true)
				.addField('Versus Score', toEmojis(vs, emoji), true);
		}

		if (finalTime) {
			embed.addField('40 Lines', toEmojis(`${(finalTime / 60000).toFixed(0)}:${finalTime % 60000 < 10000 ? '0' : ''}${(finalTime % 60000 / 1000).toFixed(3)}`, emoji), true);
		}

		if (score) {
			embed.addField('Blitz', toEmojis(score, emoji), true);
		}

		if (emoji) {
			message.say(`\`asriel user ${username} false\``, {embed});
		} else {
			message.say(embed);
		}
	}
};

function toEmojis(arg, emoji) {
	if (!emoji) {
		return arg;
	}

	let result = '';
	for (const char of arg.toString()) {
		result += emojis[char];
		result += ' ';
	}

	return result;
}
