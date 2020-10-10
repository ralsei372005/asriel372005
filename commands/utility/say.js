//* v2020.10.10

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class say extends Command {
    constructor (client) {
        super (client, {
            name: 'say',
            group: 'utility',
            memberName: 'say',
            description: 'Say a message & I will say it!',
            throttling: {
                usages: 3,
                duration: 30
            },
            args: [
                {
                    key: 'arg',
                    prompt: 'Message?',
                    type: 'string'
                }
            ]
        });
    }
    run (message, { arg }) {
        const embed = new MessageEmbed().
            setTimestamp().
            setColor('#ff0000').
            setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }));
        if (arg.length < 256) {
            embed.setTitle(arg);
        } else {
            embed.setDescription(arg);
        }
        message.say(embed);
    }
};