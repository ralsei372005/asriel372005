"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
module.exports = class del extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'del',
            group: 'admin',
            memberName: 'del',
            description: 'Bulk Delete <Integer> Messages',
            throttling: { usages: 10, duration: 60 },
            guildOnly: true,
            clientPermissions: ['MANAGE_MESSAGES'],
            userPermissions: ['MANAGE_MESSAGES'],
            args: [{
                    key: 'arg',
                    prompt: '',
                    type: 'integer',
                    default: 0,
                    validate: arg => arg >= 0
                }]
        });
    }
    run(message, { arg }) {
        arg++;
        if (arg > 100) {
            arg = 100;
        }
        message.channel.bulkDelete(arg, true);
        return true;
    }
};
//# sourceMappingURL=del.js.map