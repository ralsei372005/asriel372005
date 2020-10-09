//* v2020.10.9

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class dice extends Command {
    constructor (client) {
        super (client, {
            name: 'rolldice',
            aliases: ['roll', 'dice'],
            group: 'game',
            memberName: 'dice',
            description: 'Roll a dice!',
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
            setTitle(['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'][Math.floor(Math.random() * 6)])
        );
    }
};