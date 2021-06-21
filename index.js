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

const client = new CommandoClient({commandPrefix, owner});

// Login
client.login(process.env.token);

// Ready Set Activity, Log
client.once('ready', () => {
	client.line = 0;
	client.user.setActivity(`ralsei372005's Discord Bot Version ${version}`);
	console.log(`ralsei372005's Discord Bot Version ${version}`);
});

// Register Default Types, Groups, Default Groups, Default Commands, Commands In /commands/
client.registry
	.registerDefaultTypes()
	.registerGroups(groups)
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(require('path').join(__dirname, './commands'));

// Database
const db = new Database(`mongodb+srv://${process.env.user}:${process.env.pass}@attack.jjk0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

db.on('ready', () => {
	console.log('✅ Database');
});

db.on('error', error => {
	console.log(`❌ Database\n${error}`);
});

const chriscj = db.createModel('chriscj');

module.exports = {chriscj};
