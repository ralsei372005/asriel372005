const { CommandoClient } = require('discord.js-commando')
const path = require('path')

const client = new CommandoClient({
  commandPrefix: '?',
  owner: '278305350804045834',
  invite: 'https://discord.gg/bRCvFy9'
})

client.login(process.env.TOKEN)

client.once('ready', () => console.log('Commando ✅'))

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['first', 'Your First Command Group'],
    ['second', 'Your Second Command Group']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'))

const { Client } = require('discord.js')
const client2 = new Client()

client2.login(process.env.TOKEN)

client2.once('ready', () => console.log('Discord.js ✅'))

client2.on('message', message => {
  if (message.author.id !== '793883534983954454' || message.channel.id === process.env.CHANNEL) return
  message.channel.send('<@379643682984296448>').then(message2 => setTimeout(message2.delete(), 1000))
})
