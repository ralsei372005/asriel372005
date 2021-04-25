require('dotenv').config();
const http = require('http');
const path = require('path');
const { CommandoClient } = require('discord.js-commando');

const client = new CommandoClient({
	commandPrefix: 'asriel',
	owner: '379643682984296448'
});

client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log('Commando ✅');
	client.user.setActivity("Ralsei372005's Discord Bot");
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['admin', 'Admin Commands'],
		['general', 'General Commands!'],
		['changelog', 'Version & Change Log!']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

http.createServer((_request, respond) => {
	respond.writeHead(200);
	respond.end('ok');
}).listen(3000);

const { Client } = require('discord.js');
const discordjs = new Client();

discordjs.login(process.env.TOKEN);

discordjs.once('ready', () => {
	console.log('Discord.js ✅');
});

client.on('presenceUpdate', (_oldPresence, newPresence) => {
	if(newPresence.member.id !== '379643682984296448') return;
	const channel = newPresence.member.guild.channels.cache.get('833542259294076940');
	channel.send(`Ralsei372005 is ${newPresence.status}`);
	if(newPresence.activities[0].state !== 'Profile Picture https://www.deltarune.com/assets/images/dr-stickers.png')channel.send(`Status: ${state.split('Profile Picture https://www.deltarune.com/assets/images/dr-stickers.png').join('')}`);
	return;
});