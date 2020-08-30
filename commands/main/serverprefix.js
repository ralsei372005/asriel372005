module.exports = {
	info: 'Get Custom Server Prefix',
	time: 15000,
	guild: true,
	run: async () => {
		const {message, guilds} = require('../index');
		const guild = await guilds.findOne({where: {id: message.guild.id}});
		message.channel.send(`${message.guild.name}'s Prefix${guild ? `: ${guild.get('prefix')}` : ' Not set.'}`);
	}
};