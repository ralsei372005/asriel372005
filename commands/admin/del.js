const {Command} = require("discord.js-commando");

module.exports = class del extends Command {
    constructor (client) {
        super (client, {
            name: "del",
            group: "admin",
            memberName: "del",
            description: "Bulk Delete <Integer> Messages",
            throttling: {usages: 10, duration: 60},
            guildOnly: true,
            clientPermissions: ["MANAGE_MESSAGES"],
            userPermissions: ["MANAGE_MESSAGES"],
            args: [{
                key: "arg",
                prompt: "Bulk Delete <Integer> Messages",
                type: "integer",
                validate: arg => arg > 0
            }]
        });
    }
    run (message, {arg}) {
        if (arg > 100) {
            arg = 100;
        }
        message.channel.bulkDelete(arg, true);
    }
};