const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class mc extends Command {
	constructor (client) {
		super (client, {
			name: "minecraft",
			aliases: ["mc"],
			group: "changelog",
			memberName: "mc",
			description: "Minecraft: Java Edition - 1.17!",
			throttling: { usages: 1, duration: 3600 }
		});
	}
	run (message) {
		message.say(new MessageEmbed()
			.setTimestamp()
			.setColor("#ff0000")
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: "png", dynamic: true }))
			.setImage("https://i.imgur.com/sH4O8ci.png")
			.setTitle("Minecraft: Java Edition - 1.17")
			.setURL("https://www.minecraft.net/en-us/article/minecraft-live-the-recap")
		);
	}
};