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

		const embed = new MessageEmbed();
		const {setAuthor, setColor, setFooter, setTimestamp, setTitle, setURL, setThumbnail, addField} = embed;

		setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}));
		setColor('#00ff00');
		setFooter(`Ralsei372005's Discord Bot Version ${version}`, pfp);
		setTimestamp();

		const info = await fetch(`https://ch.tetr.io/api/users/${username}`).then(response => response.json());
		if (!info.success) {
			setTitle(info.error);
			return message.say(embed);
		}

		const records = await fetch(`https://ch.tetr.io/api/users/${username}/records`).then(response => response.json());
		if (!records.success) {
			setTitle(records.error);
			return message.say(embed);
		}

		const {data: {user, user: {league, league: {rating, glicko, rank, apm, pps, vs}}}} = info;

		setTitle(username);
		setURL(`https://ch.tetr.io/u/${username}`);
		setThumbnail(`https://tetr.io/user-content/avatars/${user._id}.jpg?rv=${user.avatar_revision}`);
		addField('Online Games Played', toEmojis(user.gamesplayed), true);
		addField('Online Games Won', toEmojis(user.gameswon), true);
		addField('\u200B', '\u200B', true);
		addField('Tetra League Games Played', toEmojis(league.gamesplayed));
		addField('Tetra League Games Won', toEmojis(league.gameswon));
		addField('\u200B', '\u200B', true);

		if (rating && glicko && rank) {
			addField('Rating', rating.toFixed(0), true);
			addField('Glicko', glicko.toFixed(0), true);
			addField('Rank', ranks[rank], true);
		}

		if (apm && pps && vs) {
			addField('Attack Per Minute', toEmojis(apm), true);
			addField('Pieces Per Second', toEmojis(pps), true);
			addField('Versus Score', toEmojis(vs));
		}

		const finalTime = records.data.records['40l'].record && records.data.records['40l'].record.endcontext.finalTime;
		const score = records.data.records.blitz.record && records.data.records.blitz.record.endcontext.score;

		if (finalTime) {
			addField('40 Lines', toEmojis(`${(finalTime / 60000).toFixed(0)}:${finalTime % 60000 < 10000 ? '0' : ''}${(finalTime % 60000 / 1000).toFixed(3)}`), true);
		}

		if (records.data.records.blitz.record) {
			addField('Blitz', toEmojis(score), true);
		}

		message.say(embed);
	}
};

function toEmojis(arg) {
	let result = '';
	for (const char of arg.toString()) {
		result += emojis[char];
	}

	return result;
}
