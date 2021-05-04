import { CommandoClient } from 'discord.js-commando'
import { Client } from 'discord.js'
import dotenv = require('dotenv')
import http = require('http')
import path = require('path')
dotenv.config()

// Commando

const client = new CommandoClient({
  commandPrefix: 'asriel',
  owner: '379643682984296448'
})

client.login(process.env.TOKEN)

client.once('ready', () => console.log('Commando ✅'))

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['admin', 'Admin Commands'],
    ['general', 'General Commands!'],
    ['changelog', 'Version & Change Log!']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'))

// Discord.js

const client2 = new Client()

client2.login(process.env.TOKEN)

client2.once('ready', () => console.log('Discord.js ✅'))

client2.on('message', message => {
  if (message.author.id !== '793883534983954454' || message.channel.id === '833688031315230721') return
  message.channel.send('<@379643682984296448>')
    .then(message2 => setTimeout(() => message2.delete(), 1000))
    .catch(console.error)
})

// AnIdiots.Guide

http.createServer((_request, respond) => {
  respond.writeHead(200)
  respond.end('ok')
}).listen(3000)
