const { MessageEmbed } = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class v extends Command {
  constructor (client) {
    super(client, {
      name: 'version',
      aliases: ['ver', 'v'],
      group: 'version',
      memberName: 'v',
      description: 'Bot Version and Developer'
    })
  }

  run (message) {
    return message.channel.send(new MessageEmbed()
      .setTitle(`Ralsei372005's Discord Bot\nAsriel372005 Version ${process.env.VERSION}\n`)
    )
  }
}
