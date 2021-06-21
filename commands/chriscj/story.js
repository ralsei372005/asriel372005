'use strict';

// Require Discord.js Commando
const {Command} = require('discord.js-commando');

module.exports = class story extends Command {
	constructor(client) {
		super(client, {
			name: 'story',
			group: 'chriscj',
			memberName: 'story',
			description: 'Chriscj Story',
			guildOnly: true
		});
	}

	run(message) {
		const {asriel372005} = require('../../index');
		asriel372005.get('story').then(value => {
			if (!value || value === 9) {
				value = 0;
			}

			const story = '- Once upon a time in a roofeed forest\n- A man was looking at the shrooms\n+ the shrooms were glooming\n+ the man wanted to taste\n- the man took a glance at the shrooms\n- the man ate a shroom\n+ the man then felt dizy\n+ Nobody has ever seen the man again.\n- End of the story.'.split('\n');
			message.channel.send(story[value]);
			asriel372005.set('story', value + 1);
		});
	}
};
