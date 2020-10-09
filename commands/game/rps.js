//* v2020.10.9

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class rps extends Command {
    constructor (client) {
        super (client, {
            name: 'rps',
            group: 'game',
            memberName: 'rps',
            description: 'Rock Paper Scissor!',
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
            setTitle(['Rock!', 'Paper!', 'Scissors!' ][Math.floor(Math.random() * 3)])
        );
    }
};