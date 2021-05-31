// ralsei372005 / asriel372005 / index.js
require('dotenv').config()
const path = require('path')
const chalk = require('chalk')
const {version} = require('./package.json')
// Winston
const winston = require('winston')
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.printf(log => chalk.green(log.message))
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
// http
const http = require('http')
http.createServer((_request, response) => {
  response.writeHead(200)
  response.end(`Asriel372005\nVersion ${version}\nRalsei372005's Discord Bot\nChange Logs:\nUpdate pfp command to handle in DM`)
}).listen(3000)
