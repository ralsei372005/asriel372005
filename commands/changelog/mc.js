// * v2020.10.5

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class version extends Command {
	constructor (client) {
		super (client, {
			name: 'minecraft',
			aliases: ['mc'],
			group: 'changelog',
			memberName: 'v',
			description: 'Minecraft: Java Edition - 1.16.3 Change Log!',
			throttling: {
				usages: 1,
				duration: 3600
			}
		});
	}
	run (message) {
		message.say(new MessageEmbed.
			setTimestamp().
			setColor('#ff0000').
			setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true })).
			setTitle('Minecraft: Java Edition - 1.16.3 Change Log!').
			setDescription('Bug fixes\nGiving an item and a gold ingot to a Baby Piglin and killing it no longer duplicates the item\nPathfinding for Piglins, Piglin Brutes, Hoglins and Zoglins has been fixed and they can now correctly navigate to the player when attacking')
		);
		message.say(new MessageEmbed.
			setTimestamp().
			setColor('#ff0000').
			setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true })).
			setTitle('Minecraft Caves & Cliffs\nMinecraft: Java Edition - 1.17').
			setDescription('Yes, yes. It’s happening. All of you proved once and for all that enough commenting, pleading, and campaigning will get you anything. As long as that thing is an update specifically to the cave and mountain systems in a game made of blocks. The Caves & Cliffs Update as it is now officially named comes with improved cave generation and features things like lush caves and dripstone caves. There will also be a brand new archeology system, which adds a very cool sense of history and storytelling element to the game. You’re digging now, but soon you’re going to be excavating.\nSomething has to populate these caverns, so we also threw in crystals, telescopes, bundles, the sculk sensor block and a new hostile mob – the warden! Does Minecraft really need more hostile mobs? Isn’t it enough that the llamas spit at you?\nThe cliff in Caves & Cliffs means that the Mountain Update that you voted for last year will be included in this one. We got a first look at the mountain goat that will populate these peaks, and I like it even though I think it resembles me a little too much. I’m not saying a certain Dutch pixel artist did this on purpose, but if he did then he got his revenge. You win this round, Boerstra.\nThe Caves & Cliffs Update also brings you copper! What’s so cool about copper that it gets its own paragraph? Besides being old-timey slang for officers of the law (unless you are British, in which case it is now-timey), copper will add an aging element to the game. No, it does not wrinkle and since we’re on the subject, neither do I. Over time however, your copper builds will start to turn green. So if you’ve been playing Minecraft for a long time, you’re finally getting the cold, hard evidence you deserve and no longer have to rely on insisting that you’re not lying. \nWhat else, what else? I feel like I’m forgetting something… oh yeah! This update brings a new contender for cutest mob, the axolotl! Look at it! It comes in a bucket! A BUCKET!\nHow am I supposed to concentrate on all the other announcements now? They better be good, or I’m going to abandon all of you by throwing myself into a bucket of axolotls. ')
		);
	}
};