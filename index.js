require('dotenv').config();
const {CommandoClient} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: require('./config.json').prefix,
	owner: require('./config.json').owner
});

client.registry
	.registerDefaultTypes()
	.registerGroups(require('./config.json').groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log('✅');
	client.user.setActivity(`ralsei372005's Discord Bot Version ${require('./package.json').version}`);
});

client.login(process.env.token);

const http = require('http');
http.createServer((_request, response) => {
	response.writeHead(200);
	response.end(`ralsei372005's Discord Bot Version ${require('./package.json').version}`);
}).listen(3000);
