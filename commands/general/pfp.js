const { MessageEmbed } = require('discord.js')
const { Command } = require('discord.js-commando')

module.exports = class pfp extends Command {
  constructor (client) {
    super(client, {
      name: 'pfp',
      group: 'general',
      memberName: 'pfp',
      description: 'Profile Picture',
      guildOnly: true,
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
        .setTitle(`${message.author.tag}'s Profile Picture`)
        .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
        .setFooter('Ralsei372005\'s Discord Bot', process.env.PFP)
        .setTimestamp()
      )
    }
    const member =
      message.guild.members.cache.find(member2 => member2.displayName === arg) ||
      message.guild.members.cache.find(member2 => member2.user.tag === arg) ||
      message.guild.members.cache.find(member2 => member2.user.username === arg) ||
      message.guild.members.cache.find(member2 => member2.displayName.startsWith(arg)) ||
      message.guild.members.cache.find(member2 => member2.user.tag.startsWith(arg)) ||
      message.guild.members.cache.find(member2 => member2.user.username.startsWith(arg))
    if (member) {
      return message.say(new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
        .setColor('#00ff00')
        .setTitle(`${member.user.tag}'s Profile Picture`)
        .setImage(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
        .setFooter('Ralsei372005\'s Discord Bot', process.env.PFP)
        .setTimestamp()
      )
    }
  }
}
