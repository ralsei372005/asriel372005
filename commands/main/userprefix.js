module.exports = {
	info: 'Get Custom User Prefix',
	time: 15000,
	run: async () => {
		const {message, users} = require('../index');
		const user = await users.findOne({where: {id: message.author.id}});
		message.channel.send(`${message.author.tag}'s Prefix${user ? `: ${user.get('prefix')}` : ' Not Set.'}`);
	}
};