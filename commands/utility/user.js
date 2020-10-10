// * v2020.10.10

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class user extends Command {
    constructor (client) {
        super (client, {
            name: 'user',
            aliases: ['member'],
            group: 'utility',
            memberName: 'member',
            description: 'User & Member Infomation!',
            throttling: {
                usages: 3,
                duration: 30
            },
            guildOnly: true,
            args: [
                {
                    key: 'arg',
                    prompt: '',
                    type: 'string',
                    default: ''
                }
            ]

        });
    }
    run (message, { arg }) {
        if (!arg) {
            arg = message.member;
        } else {
            arg = message.mentions.members.first() || message.guild.members.cache.find(member => member.displayName.toLowerCase().startsWith(arg.toLowerCase()) || member.user.tag.toLowerCase().startsWith(arg.toLowerCase()));
        }
        if (!arg) {
            return message.channel.send('Member Not Found.');
        }
        message.say(new MessageEmbed().
            setTimestamp().
            setColor('#ff0000').
            setAuthor(message.author.tag, message.author.avatarURL({ format: 'png', dynamic: true })).
            setThumbnail(arg.user.avatarURL({ format: 'png', dynamic: true })).
            setTitle(arg.user.tag).
            addFields(
                {
                    name: 'Nickname: ',
                    value: arg.displayName,
                    inline: true
                },
                {
                    name: 'Joined on: ',
                    value: Intl.DateTimeFormat('utc').format(arg.joinedAt),
                    inline: true
                },
                {
                    name: 'Roles: ',
                    value: arg.roles.cache.
                        filter(role => role.id !== message.guild.id).
                        map(role => role).
                        join(' ') || 'none'
                },
                {
                    name: 'Username:',
                    value: arg.user.tag,
                    inline: true
                },
                {
                    name: 'Created on:',
                    value: Intl.DateTimeFormat('utc').format(arg.user.createdAt),
                    inline: true
                },
                {
                    name: 'ID:',
                    value: arg.user.id
                }
            )
        );
    }
};