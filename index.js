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

client.on('presenceUpdate', (oldPresence, newPresence) => {
    const member = newPresence.member;
    if (member.id === '379643682984296448') {
        const channel = member.guild.channels.cache.get('833542259294076940');
		const status = newPresence.status;
        switch(status){
			case "online": return channel.send("Ralsei372005 is online.");
			case "idle":
				const state = newPresence.activities[0].state;
				const split = 'The power of Undertale & Deltarune OST shines within Hiccup372005. Profile picture from Deltarune.com';
				const custom = state.split(split).join()
				let text = "Ralsei372005 is idle.";
				if(custom){
					text+=`\nStatus : ${custom}`;
				}
				return channel.send(text);
			case "offline": return channel.send('Ralsei372005 is offline.');
			}
        }
    }
);