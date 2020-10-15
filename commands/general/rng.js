const {Command} = require("discord.js-commando");
const {MessageEmbed} = require("discord.js");

module.exports = class rng extends Command {
    constructor (client) {
        super(client, {
            name: "rng",
            group: "general",
            memberName: "rng",
            description: "Random Number Generator!",
            throttling: {
                usages: 10,
                duration: 60
            },
            args: [
                {
                    key: "arg",
                    prompt: "Number Range? Syntax: **`<begin>..<end>`**)",
                    type: "string",
                    validate: range => /^-?\d+\.\.-?\d+$/.test(range)
                }
            ]
        });
    }
    run (message, {arg}) {
        let begin = parseInt(arg.split("..")[0]);
        let end = parseInt(arg.split("..")[1]);
        if (begin == end) {
            return message.say("Wait... Something's Wrong, I can feel it... You have one job... Thank you for nothing, you useless reptile.");
        }
        if (begin > end) {
            [begin, end] = [end, begin];
        }
        message.say(new MessageEmbed().
            setTimestamp().
            setColor("#ff0000").
            setAuthor(message.author.tag, message.author.avatarURL({format: "png", dynamic: true})).
            setTitle(Array.from((0 | (end - begin + 1) * Math.random() + begin).toString().split(""), x => ({"-": "⛔", "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣"})[x]).join(""))
        );
    }
};