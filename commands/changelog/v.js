import { Command } from 'discord.js-commando';
import { MessageEmbed } from 'discord.js';
module.exports = class v extends Command {
    constructor(client) {
        super(client, {
            name: 'version',
            aliases: ['ver', 'v'],
            group: 'changelog',
            memberName: 'v',
            description: 'Version & Developer',
            throttling: { usages: 1, duration: 3600 }
        });
    }
    run(message) {
        return message.say(new MessageEmbed()
            .setTimestamp()
            .setColor('#ff0000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
            .setTitle('Version: 2021.5.6')
            .setDescription('Developer: Ralsei372005'));
    }
};
