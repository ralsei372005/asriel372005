// module.exports = {
//     name: ['tag'],
//     info: 'Read a tag!',
//     args: [1, '<name>'],
//     execute: async (msg) => {
//         const { tags } = require('../../db');
//         const args = msg.content.split(/ +/);

//         args.shift();

//         const tag = await tags.findOne({ where: { guild_id: msg.guild.id, name: args.join(' ') } });
//         if (!tag) {
//             return msg.channel.send('❌ No such tag');
//         }

//         msg.channel.send(tag.description);
//     }
// };