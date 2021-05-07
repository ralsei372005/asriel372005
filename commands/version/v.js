const { MessageEmbed } = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class v extends Command {
  constructor (client) {
    super(client, {
      name: 'version',
      aliases: ['ver', 'v'],
      group: 'version',
      memberName: 'v',
      description: 'Asriel372005 Version'
    })
  }

  run (message) {
    return message.channel.send(new MessageEmbed()
      .setTitle(`Asriel372005 Version ${process.env.VERSION}\nRalsei372005's Discord Bot`)
    )
  }
}
