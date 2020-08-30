module.exports = {
	alts: ['help', 'cmd', 'cmds', 'command', 'commands'],
	args: [0, '[command]'],
	info: 'Prefixes and Commands! | Name, Usage, Description!',
	time: 15000,
	run: async () => {
		const {message, args, embed, users, guilds, dirs, cmds} = require('../index');

		if (!args[1]) {
			const prefixes = ['<@!532549471213584395>', '37'];
			if (message.guild && await guilds.findOne({where: {id: message.guild.id}})) {
				prefixes.push(await guilds.findOne({where: {id: message.guild.id}}));
			}
			if (await users.findOne({where: {id: message.author.id}})) {
				prefixes.push(await users.findOne({where: {id: message.author.id}}));
			}
			embed.setTitle(`Prefixes: **\`${prefixes.join('`** **`')}\`**`);
			for (const dir of dirs) {
				if (dir != 'hiccup372005') {
					embed.addFields(
						{name: `${dir}`, value: `**\`${cmds.filter(cmd => cmd.dir == dir).map(cmd => cmd.file).join('`** **`')}\`**`, inline: true}
					);
				}
			}
			return message.channel.send(embed);
		}

		args[1] = args[1].toLowerCase();

		for (const dir of dirs) {
			if (args[1] == dir) {
				embed.setTitle(`${dir}`);
				const files = cmds.filter(cmd => cmd.dir == dir).map(cmd => cmd.file);
				for (const file of files) {
					const cmd = require(`../${dir}/${file}`);
					embed.addFields(
						{name: `${cmd.file}`, value: `${cmd.args ? `Usage: ${cmd.args[1]}\n` : ''}${cmd.info}`, inline: true}
					);
				}
				return message.channel.send(embed);
			}
		}

		const cmd = cmds.get(args[1]) || cmds.find($cmd => $cmd.alts.includes(args[1]));

		if (!cmd || cmd.dir == 'hiccup372005' && message.user.id != '379643682984296448') {
			return message.channel.send('Command Not Recognized.');
		}
		embed.setTitle(`${cmd.file}`);
		if (cmd.args) {
			embed.addField({name: 'Usage:', value: cmd.args[1]});
		}
		embed.
			addFields(
				{name: 'Description:', value: cmd.info},
				{name: 'Cooldown:', value: `${cmd.wait / 1000 || 3} seconds.`, inline: true}
			);

		message.channel.send(embed);
	}
};