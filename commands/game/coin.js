//* v2020.10.9

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class coin extends Command {
    constructor (client) {
        super (client, {
            name: 'flipcoin',
            aliases: ['flip', 'coin'],
            group: 'game',
            memberName: 'coin',
            description: 'Flip a coin!',
            throttling: {
                usages: 3,
                duration: 30
            }
        });
    }
    run (message) {
        message.say(new MessageEmbed().
            setTimestamp().
            setColor('#ff0000').
            setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true })).
            setTitle(Math.random() < 0.5 ? 'Heads!' : 'Tails!')
        );
    }
};