// * v2020.10.9

const { Command } = require('discord.js-commando');

module.exports = class pfp extends Command {
    constructor (client) {
        super (client, {
            name: 'pfp',
            group: 'utility',
            memberName: 'pfp',
            description: 'Profile Picture!',
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
            arg = message.mentions.members.first() || message.guild.members.cache.find(member => member.displayName.toLowerCase().startsWith(member.toLowerCase()) || member.user.tag.toLowerCase().startsWith(member.toLowerCase())) || '';
        }
        if (!arg) {
            return message.channel.send('Member Not Found.');
        }
        message.say(arg.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }));
    }
};