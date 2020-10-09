// module.exports = {
//     args: [0, '[prefix]'],
//     info: 'Set or Reset User Prefix',
//     time: 15000,
//     run: async () => {
//         const { message, args, users } = require('../index');
//         if (!args[1]) {
//             users.destroy({ where: { id: message.author.id } });
//             return message.channel.send(`Sucessfully Reset ${message.author.tag}'s Prefix.`);
//         }
//         if (args[1].length > 10) {
//             return message.channel.send('Prefix Cannot Be Longer Than 10 Characters.');
//         }
//         users.destroy({ where:{ id: message.author.id } });
//         const user = await users.create({
//             id: message.author.id,
//             prefix: args[1]
//         });
//         message.channel.send(`Sucessfully Set ${message.author.tag}'s Prefix to **\`${user.prefix}\`**`);
//     }
// };