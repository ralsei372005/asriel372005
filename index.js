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

client.on('message', message => {
	if(message.author.bot) return;
	if(message.author.id !== '793883534983954454') return;
	message.channel.send(`<@379643682984296448> ${message.content}`);
	if(!message.attachments) setTimeout(()=>message.delete(),3000);
});