require('dotenv').config();
const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');
const {CommandoClient} = require('discord.js-commando');
const {join} = require('path');
const {log} = console;

const {registry: {registerDefaultTypes, registerGroups, registerDefaultGroups, registerDefaultCommands, registerCommandsIn}, once, login, user: {setActivity}} = new CommandoClient({
	commandPrefix,
	owner
});

registerDefaultTypes();
registerGroups(groups);
registerDefaultGroups();
registerDefaultCommands();
registerCommandsIn(join(__dirname, 'commands'));

once('ready', () => {
	log('✅');
	setActivity(`ralsei372005's Discord Bot Version ${version}`);
});

login(process.env.token);

const {createServer} = require('http');
createServer((_request, response) => {
	const {writeHead, end} = response;
	writeHead(200);
	end(`ralsei372005's Discord Bot Version ${version}`);
}).listen(3000);
