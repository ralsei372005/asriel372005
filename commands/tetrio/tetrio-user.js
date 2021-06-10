const config = require('../../config.json');
const {MessageEmbed} = require('discord.js');
const {Command} = require('discord.js-commando');
const https = require('https');
const {emojis} = require('../../config.json');
module.exports = class tetrio extends Command {
	constructor(client) {
		super(client, {
			name: 'tetrio-user',
			aliases: ['tetrio', 'user'],
			group: 'tetrio',
			memberName: 'tetrio',
			description: 'Tetrio User',
			args: [
				{
					key: 'user',
					prompt: '',
					type: 'string'
				}
			]
		});
	}

	run(message, {user}) {
		https.get(`https://ch.tetr.io/api/users/${user}`, response => {
			let rawData = '';
			response.on('data', chunk => {
				rawData += chunk;
			});
			response.on('end', () => {
				try {
					const parsedData = JSON.parse(rawData);
					message.say(new MessageEmbed()
						.setAuthor(message.author.tag, message.author.displayAvatarURL({format: 'png', dynamic: true}))
						.setColor('#00ff00')
						.setTitle(`${user}'s Tetrio`)
						.setFooter('Ralsei372005\'s Discord Bot', config.pfp)
						.setTimestamp()
						.addFields([
							{name: 'xp:', value: parsedData.data.user.xp},
							{name: 'Online Games played:', value: parsedData.data.user.gamesplayed},
							{name: 'Online Games won:', value: parsedData.data.user.gameswon},
							{name: 'Tetra League Games played:', value: parsedData.data.user.league.gamesplayed},
							{name: 'Tetra League Games won:', value: parsedData.data.user.league.gameswon},
							{name: 'Tetra League Rating:', value: `${parsedData.data.user.league.rating} TR`},
							{name: 'Tetra League Glicko:', value: `${parsedData.data.user.league.glicko} + ${parsedData.data.user.league.rd} RD`},
							{name: 'Tetra League Rank:', value: emojis[parsedData.data.user.league.rank]},
							{name: 'Attacks per minute:', value: parsedData.data.user.league.apm},
							{name: 'Pieces per second', value: parsedData.data.user.league.pps},
							{name: '~~Visual Studio~~ Versus:', value: parsedData.data.user.league.vs}
						])
					);
				} catch (e) {
					console.error(e.message);
				}
			});
		});
	}
};
