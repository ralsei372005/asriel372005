// * v2020.9.17

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class guild extends Command {
    constructor (client) {
        super (client, {
            name: 'server',
            aliases: ['guild'],
            group: 'utility',
            memberName: 'guild',
            description: 'Server Infomation!',
            throttling: {
                usages: 1,
                duration: 60
            },
            guildOnly: true
        });
    }
    run (message) {
        message.say(new MessageEmbed().
            setTimestamp().
            setColor('#ff0000').
            setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true })).
            setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true })).
            setTitle(message.guild.name).
            addFields(
                {
                    name: 'Owner:',
                    value: message.guild.owner,
                    inline: true
                },
                {
                    name: 'Members:',
                    value: message.guild.memberCount,
                    inline: true
                },
                {
                    name: 'Created on:',
                    value: Intl.DateTimeFormat('utc').format(message.guild.createdAt),
                    inline: true
                },
                {
                    name: 'ID:',
                    value: message.guild.id
                },
                {
                    name: 'Roles:',
                    value: message.guild.roles.cache.
                        filter(role => role.id !== message.guild.id).
                        map(role => role).
                        join(' ') || 'none'
                }
            )
        );
    }
};