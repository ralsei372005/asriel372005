'use strict';

const {version} = require('../../package.json');
const {pfp, ranks} = require('../../config.json');
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
			}]
		});
	}

	async run(message, {username}) {
		const embed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}))
			.setColor('#00ff00')
			.setFooter(`Ralsei372005's Discord Bot Version ${version}`, pfp)
			.setTimestamp();

		// Fetch User Info
		const info = await fetch(`https://ch.tetr.io/api/users/${username.toLowerCase()}`).then(response => response.json());
		if (!info.success) {
			embed.setTitle(info.error);
			return message.say(embed);
		}

		// Fetch User Records
		const records = await fetch(`https://ch.tetr.io/api/users/${username.toLowerCase()}/records`).then(response => response.json());
		if (!records.success) {
			embed.setTitle(records.error);
			return message.say(embed);
		}

		const {data: {user, user: {league, league: {rating, glicko, rank, apm, pps, vs}}}} = info;
		const finalTime = records.data.records['40l'].record && records.data.records['40l'].record.endcontext.finalTime;
		const score = records.data.records.blitz.record && records.data.records.blitz.record.endcontext.score;

		embed
			.setTitle(username.toUpperCase())
			.setThumbnail(`https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}`)
			.addField('Online Games Played', user.gamesplayed, true)
			.addField('Online Games Won', user.gameswon, true)
			.addField('\u200B', '\u200B', true)
			.addField('Tetra League Played', league.gamesplayed, true)
			.addField('Tetra League Won', league.gameswon, true)
			.addField('\u200B', '\u200B', true);

		if (rating && glicko && rank) {
			embed
				.addField('Rating', rating.toFixed(0), true)
				.addField('Glicko', glicko.toFixed(0), true)
				.addField('Rank', ranks[rank], true);
		}

		if (apm && pps && vs) {
			embed
				.addField('Attack Per Minute', apm, true)
				.addField('Pieces Per Second', pps, true)
				.addField('Versus Score', vs, true);
		}

		if (finalTime) {
			embed.addField('40 Lines', `${(finalTime / 60000).toFixed(0)}:${finalTime % 60000 < 10000 ? '0' : ''}${(finalTime % 60000 / 1000).toFixed(3)}`, true);
		}

		if (score) {
			embed.addField('Blitz', score, true);
		}

		message.say(embed);
	}
};
