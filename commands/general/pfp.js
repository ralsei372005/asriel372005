const { MessageEmbed } = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class pfp extends Command {
  constructor (client) {
    super(client, {
      name: 'pfp',
      group: 'general',
      memberName: 'pfp',
      description: 'Profile Picture',
      args: [
        {
          key: 'arg',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]
    })
  }

  run (message, { arg }) {
    if (!arg) {
      return message.say(new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
        .setColor('#00ff00')
        .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true }))
        .setFooter('Ralsei372005\'s Discord Bot', 'https://i.imgur.com/caTM0vK.png')
        .setTimestamp()
      )
    }
    const user = this.client.users.cache.find(user2 => user2.username.startsWith(arg))
    if (!user) return message.say(`No user with username starts with ${arg} found.`)
    return message.say(new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
      .setColor('#00ff00')
      .setImage(user.displayAvatarURL({ format: 'png', dynamic: true }))
      .setFooter('Ralsei372005\'s Discord Bot', 'https://i.imgur.com/caTM0vK.png')
      .setTimestamp()
    )
  }
}
