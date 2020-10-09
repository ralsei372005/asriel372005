// module.exports = {
//     name: ['addtag', 'tagadd'],
//     args: [2, '<n-a-m-e> <d e s c r i p t i o n>'],
//     info: 'Add a tag!',
//     execute: async (msg) => {
//         const { tags } = require('../../db');
//         const args = msg.content.split(/ +/);

//         if (args[1].length > 255) {
//             return msg.channnel.send('❌ Tag name must be less than 255 characters.');
//         }

//         const name = args[1].split('-').join(' ');
//         const tag = await tags.findOne({ where: { guild_id: msg.guild.id, name: name } });

//         if (tag) {
//             return msg.channel.send('❌ Tag already existed.');
//         }

//         args.shift();
//         args.shift();

//         await tags.create({
//             guild_id: msg.guild.id,
//             user_id: msg.author.id,
//             name: name,
//             description: args.join(' ')
//         });
//         msg.channel.send('✅ Tag added.');
//     }
// };