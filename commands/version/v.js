const { version } = require('../../package.json')
const config = require('../../config.json')
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
    return message.say(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
      .setColor('#00ff00')
      .setTitle(`Asriel372005 Version ${version}`)
      .setURL('https://asriel372005.ralsei372005.repl.co')
      .setFooter('Ralsei372005\'s Discord Bot', config.pfp)
      .setTimestamp()
    )
  }
}
