// * v2020.9.17

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class rng extends Command {
    constructor (client) {
        super(client, {
            name: 'rng',
            alias: ['RanInt'],
            group: 'utility',
            memberName: 'rng',
            description: 'Random Number Generator! Generate Random Number **`<begin>..<end>`**',
            throttling: {
                usages: 5,
                duration: 20
            },
            args: [
                {
                    key: 'args',
                    prompt: 'Number Range? Syntax: **`<begin>..<end>`**)',
                    type: 'string',
                    validate: range => /^\d+\.\.\d+$/.test(range)
                }
            ]
        });
    }
    run (message, { range }) {
        let begin = parseInt(range.split('..')[0]);
        let end = parseInt(range.split('..')[1]);
        if (begin == end) {
            return message.say(`Wait a second... You think you can fool me? The random number will always be ${begin}!`);
        }
        if (begin > end) {
            [begin, end] = [end, begin];
        }
        message.say(new MessageEmbed().
            setTimestamp().
            setColor('#ff0000').
            setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true })).
            setTitle(Math.floor(Math.random() * (end - begin + 1)) + begin)
        );
    }
};