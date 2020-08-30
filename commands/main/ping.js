module.exports = {
	info: 'Bot Ping & Discord Application Programming Interface (API) Ping!',
	time: 15000,
	run () {
		const {message, embed} = require('../index');

		message.channel.send('Pinging...').then($message => {
			embed.
				addFields(
					{name: '🤖 Bot Ping:', value: `${Math.floor($message.createdAt - message.createdAt)}ms`},
					{name: '💻 Discord API (Application Programming Interface) Ping:', value: `${Math.floor(message.client.ws.ping)}ms`}
				);
			message.channel.send(embed);
			$message.delete();
		});
	}
};