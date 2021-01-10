const http = require('http');
const path = require('path');
const { CommandoClient } = require('discord.js-commando');
const { Client } = require('discord.js');

const client = new CommandoClient({
	commandPrefix: 't3',
	owner: '379643682984296448'
});

// eslint-disable-next-line no-process-env
client.login(process.env.TOKEN);

client.on('ready', () => {
	console.log('ready');
	client.user.setActivity("t3help | hiccup372005's Discord Bot");
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['admin', 'Admin Commands'],
		['general', 'General Commands!'],
		['changelog', 'Version & Change Log!'],
		['reaction-role', '(Beta) Reaction Roles']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

http.createServer((_request, respond) => {
	respond.writeHead(200);
	respond.end('ok');
}).listen(3000);

const discordjs = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
discordjs.on('messageReactionAdd', async(reaction, user) => {
	if(reaction.message.partial) await reaction.message.fetch();
	if(reaction.partial) await reaction.fetch();
	if(reaction.message.channel.id !== '794501595677065256') return;
	if(reaction.emoji.name !== '🔔') return;
	await reaction.message.guild.members.cache.get(user.id).roles.add('794493582684979260');
});
discordjs.on('messageReactionRemove', async(reaction, user) => {
	if(reaction.message.partial) await reaction.message.fetch();
	if(reaction.partial) await reaction.fetch();
	if(reaction.message.channel.id !== '794501595677065256') return;
	if(reaction.emoji.name !== '🔔') return;
	await reaction.message.guild.members.cache.get(user.id).roles.remove('794493582684979260');
});
