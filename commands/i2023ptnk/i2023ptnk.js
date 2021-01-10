require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client({ partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'] });
client.on('messageReactionAdd', async(reaction, user) => {
	if(reaction.message.partial)reaction.message.fetch();
	if(reaction.partial)reaction.fetch();
	if(reaction.message.channel.id === '794501595677065256' && reaction.emoji.name === '🔔') {
		await reaction.message.guild.members.cache.get(user.id).roles.add('794493582684979260');
	}
});
client.on('messageReactionRemove', async(reaction, user) => {
	if(reaction.message.partial)reaction.message.fetch();
	if(reaction.partial)reaction.fetch();
	if(!reaction.message.author.bot &&
	reaction.message.channel.id === '794501595677065256' &&
	reaction.emoji.name === '🔔') {
		reaction.message.react('🔔');
		await reaction.message.guild.members.cache.get(user.id).roles.remove('794493582684979260');
	}
});
client.on('guildMemberAdd', member => {
	member.roles.add('794493582684979260');
});
// eslint-disable-next-line no-process-env
client.login(process.env.TOKEN);
