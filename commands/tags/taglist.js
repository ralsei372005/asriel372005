// module.exports = {
//     name: ['taglist', 'listtag'],
//     info: 'Tags list!',
//     execute: async (msg) => {
//         const { tags } = require('../../db');

//         const Tags = await tags.findAll({ where: { guild_id: msg.guild.id } });

//         msg.channel.send(Tags.map(tag => tag.name).join(' | ') || 'No tag found.');
//     }
// };