// module.exports = {
//     name: ['taginfo'],
//     args: [1, '<n a m e>'],
//     info: 'Tag Infomation!',
//     execute: async (msg) => {
//         const { tags } = require('../../db');
//         const args = msg.content.split(/ +/);

//         args.shift();

//         const tag = await tags.findOne({ where: { guild_id: msg.guild.id, name: args.join(' ') } });

//         if (!tag) {
//             return msg.channel.send('❌ No such tag');
//         }

//         msg.channel.send(`Tag created by ${msg.client.users.cache.get(tag.user_id).tag}\nTag created on: ${Intl.DateTimeFormat('utc').format(tag.createdAt)}`);
//     }
// };