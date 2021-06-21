'use strict';

// Require Dot Env Config, Http Create Server
require('dotenv').config();
require('http').createServer((_request, response) => {
	response.writeHead(200);
	response.end(`ralsei372005's Discord Bot Version ${version}`);
}).listen(3000);

// Require Package Version, Config, Discord.js Commando Client
const {version} = require('./package.json');
const {commandPrefix, owner, groups} = require('./config.json');
const {CommandoClient} = require('discord.js-commando');
const {Database} = require('quickmongo');

// New Client
const client = new CommandoClient({commandPrefix, owner});

// Login
client.login(process.env.token);

// Ready Set Activity, Log
client.once('ready', () => {
	client.user.setActivity(`ralsei372005's Discord Bot Version ${version}`);
	console.log('✅ Bot');
});

// Register Default Types, Groups, Default Groups, Default Commands, Commands In /commands/
client.registry
	.registerDefaultTypes()
	.registerGroups(groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(require('path').join(__dirname, './commands'));

// New Database
const db = new Database(process.env.mongo);

db.on('ready', () => console.log('✅ Database'));

const asriel372005 = db.createModel('asriel372005');

module.exports = {asriel372005};
