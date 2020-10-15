const {Command} = require("discord.js-commando");
const {MessageEmbed} = require("discord.js");

module.exports = class v extends Command {
    constructor (client) {
        super (client, {
            name: "version",
            aliases: ["ver", "v"],
            group: "changelog",
            memberName: "v",
            description: "Version & Owner!",
            throttling: {
                usages: 1,
                duration: 3600
            }
        });
    }
    run (message) {
        message.say(new MessageEmbed().
            setTimestamp().
            setColor("#ff0000").
            setAuthor(message.author.tag, message.author.displayAvatarURL({format: "png", dynamic: true})).
            setTitle("Version: v2020.10.14").
            setDescription("Owner: hiccup372005")
        );
    }
};