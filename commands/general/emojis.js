const { Command } = require('discord.js-commando')
module.exports = class emojis extends Command {
  constructor (client) {
    super(client, {
      name: 'emojis',
      group: 'general',
      memberName: 'emojis',
      description: 'Server emojis',
      guildOnly: true
    })
  }
  run (message) {
    message.channel.send(message.guild.emojis.cache.map(emoji => emoji.toString()))
    console.log(message.guild.emojis.cache.map(emoji => emoji.toString()))
  }
}
