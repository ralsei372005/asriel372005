// ralsei372005 / asriel372005 / index.js
require('dotenv').config()
const path = require('path')
const chalk = require('chalk')
// Winston
const winston = require('winston')
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => chalk.green(`[Ready] ${log.message}`))
})
// Discord.js-Commando
const { CommandoClient } = require('discord.js-commando')
const client = new CommandoClient({
  commandPrefix: 'asriel',
  owner: '379643682984296448'
})
client.login(process.env.TOKEN)
client.once('ready', () => logger.info('Commando ✅'))
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['admin', 'Admin Commands'],
    ['version', 'Asriel372005 Version'],
    ['general', 'General Commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'))
// Discord.js
const { Client } = require('discord.js')
const client2 = new Client()
client2.login(process.env.TOKEN)
client2.once('ready', () => logger.info('Discord.js ✅'))
client2.on('message', message => {
  if (message.author.id !== '793883534983954454' || message.channel.id === process.env.CHANNEL) return
  message.channel.send('<@379643682984296448>').then(message2 => setTimeout(message2.delete(), 1000))
})
// http
const http = require('http')
http.createServer((_request, response) => {
  response.writeHead(200)
  response.end(`Asriel372005 Version ${process.env.VERSION}\nRalsei372005's Discord Bot`)
}).listen(3000)
