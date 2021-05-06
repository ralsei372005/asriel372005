import { Command } from 'discord.js-commando';
import { MessageEmbed } from 'discord.js';
module.exports = class guild extends Command {
    constructor(client) {
        super(client, {
            name: 'server',
            aliases: ['guild'],
            group: 'general',
            memberName: 'guild',
            description: 'Server Infomation',
            throttling: { usages: 1, duration: 3600 },
            guildOnly: true
        });
    }
    run(message) {
        return message.say(new MessageEmbed()
            .setTimestamp()
            .setColor('#ff0000')
            .setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true, size: 4096 }))
            .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 4096 }))
            .setTitle(message.guild.name)
            .addFields({
            name: 'Owner:',
            value: message.guild.owner,
            inline: true
        }, {
            name: 'Members:',
            value: message.guild.memberCount,
            inline: true
        }, {
            name: 'Created on:',
            // eslint-disable-next-line new-cap
            value: Intl.DateTimeFormat('utc').format(message.guild.createdAt),
            inline: true
        }, {
            name: 'ID:',
            value: message.guild.id
        }, {
            name: 'Roles:',
            value: message.guild.roles.cache
                .filter(role => role.id !== message.guild.id)
                .map(role => role)
                .join(' ') || 'none'
        }));
    }
};
