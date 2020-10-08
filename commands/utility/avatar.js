// * v2020.9.17

const { Command } = require('discord.js-commando');

module.exports = class avatar extends Command {
    constructor (client) {
        super (client, {
            name: 'pfp',
            aliases: ['avatar'],
            group: 'utility',
            memberName: 'avatar',
            description: 'Profile Picture!',
            throttling: {
                usages: 3,
                duration: 60
            },
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: '',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }
    run (message, { member }) {
        if (!member) {
            member = message.member;
        } else {
            member = message.mentions.members.first() || message.guild.members.cache.find($member => $member.displayName.toLowerCase().startsWith(member.toLowerCase()) || $member.user.tag.toLowerCase().startsWith(member.toLowerCase())) || '';
        }
        if (!member) {
            return message.channel.send('Member Not Found.');
        }
        message.say(member.user.displayAvatarURL({ format: 'png', dynamic: true }));
    }
};