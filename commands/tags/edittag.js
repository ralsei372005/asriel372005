// module.exports = {
//     name: ['edittag', 'tagedit'],
//     args: [2, '<n-a-m-e> <d e s c r i p t i o n>'],
//     info: 'Edit a tag!',
//     execute: async (msg) => {
//         const { tags } = require('../../db');
//         const args = msg.content.split(/ +/);
//         const name = args[1].split('-').join(' ');

//         const tag = await tags.findOne({ where: { guild_id: msg.guild.id, name: name } });

//         if (!tag) {
//             return msg.channel.send('❌ No such tag.');
//         }

//         if (tag.user_id != msg.author.id) {
//             return msg.channel.send(`❌ Only ${msg.client.users.cache.get(tag.id)} can edit the tag.`);
//         }

//         args.shift();
//         args.shift();

//         await tags.update({ description: args.join(' ') }, { where: { name: name } });

//         msg.channel.send('✅ Tag edited.');
//     }
// };