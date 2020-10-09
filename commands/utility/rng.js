// * v2020.10.9

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class rng extends Command {
    constructor (client) {
        super(client, {
            name: 'rng',
            group: 'utility',
            memberName: 'rng',
            description: 'Random Number Generator!',
            throttling: {
                usages: 3,
                duration: 30
            },
            args: [
                {
                    key: 'arg',
                    prompt: 'Number Range? Syntax: **`<begin>..<end>`**)',
                    type: 'string',
                    validate: range => /^\d+\.\.\d+$/.test(range)
                }
            ]
        });
    }
    run (message, { arg }) {
        let begin = parseInt(arg.split('..')[0]);
        let end = parseInt(arg.split('..')[1]);
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
            setTitle(toEmoji(Math.floor(Math.random() * (end - begin + 1)) + begin))
        );
    }
};

function toEmoji (s) {
    let title;
    const emoji = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
    for (const c of toString(s)) {
        title = toString(title) + emoji[c];
    }
    return title;
}