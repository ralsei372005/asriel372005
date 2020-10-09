// module.exports = {
//     name: ['deltag', 'tagdel', 'deletetag', 'tagdelete'],
//     args: [1, '<n a m e>'],
//     info: 'Delete a tag!',
//     execute: async (msg) => {
//         const { tags } = require('../../db');
//         const args = msg.content.split(/ +/);

//         args.shift();

//         const tag = await tags.findOne({ where: { guild_id: msg.guild.id, name: args.join(' ') } });

//         if (!tag) {
//             return msg.channel.send('❌ No such tag.');
//         }

//         if (tag.user_id != msg.author.id && msg.author.id != process.env.id) {
//             return msg.channel.send(`❌ Only ${msg.client.users.cache.get(tag.id)} can delete the tag.`);
//         }

//         await tags.destroy({ where: { name: args.join(' ') } });
//         msg.channel.send('✅ Tag deleted.');
//     }
// };