import { Command } from 'discord.js-commando'
import { MessageEmbed } from 'discord.js'

module.exports = class pfp extends Command {
  constructor (client) {
    super(client, {
      name: 'pfp',
      group: 'general',
      memberName: 'pfp',
      description: 'Profile Picture',
      throttling: { usages: 10, duration: 60 },
      guildOnly: true,
      args: [{
        key: 'arg',
        prompt: '',
        type: 'string',
        default: ''
      }]
    })
  }

  run (message, { arg }) {
    if (!arg) {
      arg = message.member
    } else {
      // eslint-disable-next-line max-len
      arg = message.mentions.members.first() || message.guild.members.cache.find(member => member.displayName.toLowerCase().startsWith(arg.toLowerCase()) || member.user.tag.toLowerCase().startsWith(arg.toLowerCase())) || ''
    }
    if (!arg) {
      return message.channel.send('Member Not Found.')
    }
    return message.say(new MessageEmbed()
      .setTimestamp()
      .setColor('#ff0000')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
      .setImage(arg.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
    )
  }
}
