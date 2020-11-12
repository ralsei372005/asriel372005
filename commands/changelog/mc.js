const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");

module.exports = class mc extends Command {
	constructor (client) {
		super (client, {
			name: "minecraft",
			aliases: ["mc"],
			group: "changelog",
			memberName: "mc",
			description: "Minecraft: Java Edition - Snapshot 20w46a",
			throttling: { usages: 1, duration: 3600 }
		});
	}
	run (message) {
		message.say(new MessageEmbed()
			.setTimestamp()
			.setColor("#ff0000")
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: "png", dynamic: true }))
			.setImage("https://i.imgur.com/a73wKYQ.png")
			.setURL("https://minecraft.net/article/minecraft-snapshot-20w46a")
			.setTitle("Minecraft: Java Edition - Snapshot 20w46a")
			.addFields(
				{
					name: "New features",
					value: ":snowflake: Powder snow\n- Powder Snow is a trap block that causes any entity that walks into it to sink in it\n- Wear leather boots to prevent yourself from sinking into powder snow blocks\n- Leave a cauldron outside in falling snow and it will fill with powder snow\n:cold_face: Freezing\n- Standing in powder snow will slowly freeze an entity\n- Once frozen, freeze damage is done every few seconds to the frozen entity\n- Each piece of leather armor worn causes an entity to freeze more slowly"
				},
				{
					name: "Changes",
					value: ":zap: The range in which a lightning rod attracts lightning has been doubled\n:brown_square: Copper blocks are now crafted from four copper ingots\n:worm: “Debug” world type can now be accessed while holding alt key (was shift)\n:eye: Changed a number of the textures for blocks and items introduced in the previous snapshot\n:pager: Added /item command and item modifiers, which reuse loot table functions syntax to describe item\n:moneybag: Loot tables can now access scoreboard values by UUID\n… and more!"
				},
				{
					name: "Bug fixes",
					value: ":green_circle: Fixed an issue that caused experience orbs to be unable to be picked up\n:map: Fixed a crash that could occur when creating a superflat world with nothing but air\n:telescope: Fixed the arm alignment when using Spyglass in multiplayer\n:crystal_ball: Amethyst clusters now correctly drop Amethyst buds when mined with silk touch\n… and more!"
				}
			)
		);
	}
};