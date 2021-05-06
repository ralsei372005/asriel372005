import { Command } from 'discord.js-commando'
import { MessageEmbed } from 'discord.js'

module.exports = class rng extends Command {
  constructor (client) {
    super(client, {
      name: 'rng',
      group: 'general',
      memberName: 'rng',
      description: 'Random Number Generator',
      throttling: { usages: 10, duration: 60 },
      args: [{
        key: 'arg',
        prompt: 'Number Range? Syntax: **`<begin>..<end>`**)',
        type: 'string',
        validate: range => /^-?\d+\.\.-?\d+$/.test(range)
      }]
    })
  }

  run (message, { arg }) {
    const emoji = {
      0: ':zero:',
      1: ':one:',
      2: ':two:',
      3: ':three:',
      4: ':four:',
      5: ':five:',
      6: ':six:',
      7: ':seven:',
      8: ':eight:',
      9: ':nine:',
      '-': ':no_entry:'
    }
    const begin = BigInt(arg.split('..')[0])
    const end = BigInt(arg.split('..')[1])
    // eslint-disable-next-line no-bitwise
    const rand = Array.from(new Array(`${end - begin}`.length), () => `${0 | 9 * Math.random()}`).join('')
    const result = `${(BigInt(rand) % (end - begin + 1n)) + begin}`
    const output = Array.from(result, char => emoji[char])
    if (output.join('').length <= 256) {
      return message.say(new MessageEmbed()
        .setTimestamp()
        .setColor('#ff0000')
        .setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true }))
        .setTitle(output.join(''))
      )
    } else if (output.join('').length <= 2048) {
      return message.say(new MessageEmbed()
        .setTimestamp()
        .setColor('#ff0000')
        .setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true }))
        .setDescription(output.join(''))
      )
    }
  }
}
