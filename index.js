"use strict";
exports.__esModule = true;
var discord_js_commando_1 = require("discord.js-commando");
var discord_js_1 = require("discord.js");
var dotenv = require("dotenv");
var http = require("http");
var path = require("path");
dotenv.config();
// Commando
var client = new discord_js_commando_1.CommandoClient({
    commandPrefix: 'asriel',
    owner: '379643682984296448'
});
client.login(process.env.TOKEN);
client.once('ready', function () { return console.log('Commando ✅'); });
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
// Discord.js
var client2 = new discord_js_1.Client();
client2.login(process.env.TOKEN);
client2.once('ready', function () { return console.log('Discord.js ✅'); });
client2.on('message', function (message) {
    if (message.author.id !== '793883534983954454' || message.channel.id === process.env.CHANNEL)
        return;
    message.channel.send('<@379643682984296448>')
        .then(function (message2) { return setTimeout(function () { return message2["delete"](); }, 1000); })["catch"](console.error);
});
// AnIdiots.Guide
http.createServer(function (_request, respond) {
    respond.writeHead(200);
    respond.end('ok');
}).listen(3000);
