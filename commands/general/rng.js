const {Command} = require("discord.js-commando");
const {MessageEmbed} = require("discord.js");

module.exports = class rng extends Command {
    constructor (client) {
        super(client, {
            name: "rng",
            group: "general",
            memberName: "rng",
            description: "Random Number Generator!",
            throttling: {usages: 10, duration: 60},
            args: [{
                key: "arg",
                prompt: "Number Range? Syntax: **`<begin>..<end>`**)",
                type: "string",
                validate: range => /^-?\d+\.\.-?\d+$/.test(range)
            }]
        });
    }
    run (message, {arg}) {
        const emoji = {
            0: ":zero:",
            1: ":one:",
            2: ":two:",
            3: ":three:",
            4: ":four:",
            5: ":five:",
            6: ":six:",
            7: ":seven:",
            8: ":eight:",
            9: ":nine:",
            "-": ":no_entry"
        };
        const args = arg.split("..");
        const begin = args[0];
        const end = args[1];
        const diff = BigInt(end) - BigInt(begin);
        const rand = Array.from(new Array((diff + "").length), () => (0 | 9 * Math.random()) + "").join("");
        const result = BigInt(rand) % (diff + 1n) + BigInt(begin) + "";
        const output = Array.from(result, x => emoji[x]).join("");
        message.say(new MessageEmbed().
            setTimestamp().
            setColor("#ff0000").
            setAuthor(message.author.tag, message.author.avatarURL({format: "png", dynamic: true})).setTitle(output)
        );
    }
};

