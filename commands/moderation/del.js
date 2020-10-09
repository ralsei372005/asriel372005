// * v2020.10.9

const { Command } = require('discord.js-commando');

module.exports = class del extends Command {
    constructor (client) {
        super (client, {
            name: 'del',
            aliases: ['delete', 'clear'],
            group: 'moderation',
            memberName: 'del',
            description: 'Bulk Delete Messages',
            throttling: {
                usages: 2,
                duration: 10
            },
            guildOnly: true,
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                    key: 'arg',
                    prompt: 'Bulk Delete Range?',
                    type: 'integer',
                    validate: arg => arg > 0
                }
            ]
        });
    }
    run (message, { arg }) {
        if (arg > 100) {
            arg = 100;
        }
        message.channel.bulkDelete(arg, true);
    }
};