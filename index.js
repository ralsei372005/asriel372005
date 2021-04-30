/*  Ralsei372005/Asriel372005/Index.js  */ 

require('dotenv').config();

const { join } = require('path');

/*  Commando  */

const { CommandoClient } = require('discord.js-commando');

const client = new CommandoClient({
	commandPrefix: 'asriel',
	owner: '379643682984296448'
});

client.login(process.env.TOKEN);

client.once('ready', () => console.log('Commando ✅'));

client.registry
	.registerDefaultTypes()
	.registerGroups([
		['admin', 'Admin Commands'],
		['general', 'General Commands!'],
		['changelog', 'Version & Change Log!']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(join(__dirname, 'commands'));

/*  Discord.js  */

const { Client } = require('discord.js');

const client2 = new Client();

client2.login(process.env.TOKEN);

client2.once('ready', () => console.log('Discord.js ✅'));

client2.on('message', message => {
	if(message.author.id !== '793883534983954454') return;
	if(message.channel.id !== '833688031315230721') return;
	message.channel.send(`<@379643682984296448>`)
		.then(message2 => setTimeout(()=>message2.delete(),3000))
		.catch(console.error);
	console.log(message.content);
});

/*  AnIdiots.Guide  */

const http = require('http');

http.createServer((_request, respond) => {
	respond.writeHead(200);
	respond.end('ok');
}).listen(3000);