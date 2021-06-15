require('dotenv').config();

require('https').createServer((_request, response) => {
	response.writeHead(200);
	response.end(`ralsei372005's Discord Bot Version ${version}`);
}).listen(3000);

const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');

const {CommandoClient} = require('discord.js-commando');
const {join} = require('path');

const {login, once, user: {setActivity}, registry: {registerDefaultTypes, registerGroups, registerDefaultGroups, registerDefaultCommands, registerCommandsIn}} = new CommandoClient({commandPrefix, owner});

login(process.env.token);

once('ready', () => {
	console.log(`ralsei372005's Discord Bot Version ${version}`);
	setActivity(`ralsei372005's Discord Bot Version ${version}`);
});

registerDefaultTypes();
registerGroups(groups);
registerDefaultGroups();
registerDefaultCommands();
registerCommandsIn(join(__dirname, './commands'));
