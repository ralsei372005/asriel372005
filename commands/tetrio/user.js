/* eslint-disable camelcase */

'use strict';

// Require Package Version, Config, Discord.js Commando, Discord.js Message Embed, Node Fetch
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
		// Username To Lower, Upper Case
		username = username.toLowerCase();
		const USERNAME = username.toUpperCase();

		// Fetch User Info, Records
		const info = await fetch(`https://ch.tetr.io/api/users/${username}`).then(response => response.json());
		const records = await fetch(`https://ch.tetr.io/api/users/${username}/records`).then(response => response.json());
		if (!info.success) {
			return message.say(info.error);
		}

		// User, _ID, Avatar Revision, League, Rating, Glicko, Rank, Attack Per Minute, Pieces Per Second, Versus Score, 40 Lines Final Time, Blitz Score
		const {data: {user, user: {_id, avatar_revision, league, league: {rating, glicko, rank, apm, pps, vs}}}} = info;
		const finalTime = records.data.records['40l'].record && records.data.records['40l'].record.endcontext.finalTime;
		const score = records.data.records.blitz.record && records.data.records.blitz.record.endcontext.score;

		// Set Author, Color, Footer, Thumbnail, Timestamp, Title, URL
		const embed = new MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}))
			.setColor('#00ff00')
			.setFooter(`Ralsei372005's Discord Bot Version ${version}`, pfp)
			.setThumbnail(`https://tetr.io/user-content/avatars/${_id}.jpg?rv=${avatar_revision}`)
			.setTimestamp()
			.setTitle(USERNAME)
			.setURL(`https://ch.tetr.io/u/${username}`);

		// Online Games, Tetra League Played, Won
		embed
			.addField('Online Games Played', user.gamesplayed, true)
			.addField('Online Games Won', user.gameswon, true)
			.addField('\u200B', '\u200B', true)
			.addField('Tetra League Played', league.gamesplayed, true)
			.addField('Tetra League Won', league.gameswon, true)
			.addField('\u200B', '\u200B', true);

		// Rating, Glicko, Rank
		if (rating && glicko && rank) {
			embed
				.addField('Rating', rating.toFixed(0), true)
				.addField('Glicko', glicko.toFixed(0), true)
				.addField('Rank', ranks[rank], true);
		}

		// Attack Per Minute, Pieces Per Second, Versus Score
		if (apm && pps && vs) {
			embed
				.addField('Attack Per Minute', apm, true)
				.addField('Pieces Per Second', pps, true)
				.addField('Versus Score', vs, true);
		}

		// 40 Lines Final Time
		if (finalTime) {
			embed.addField('40 Lines', `${Math.floor(finalTime / 60000)}:${finalTime % 60000 < 10000 ? '0' : ''}${(finalTime % 60000 / 1000).toFixed(3)}`, true);
		}

		// Blitz Score
		if (score) {
			embed.addField('Blitz', score, true);
		}

		message.say(embed);
	}
};
