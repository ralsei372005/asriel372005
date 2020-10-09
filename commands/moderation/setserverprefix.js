// module.exports = {
//     args: [0, '[prefix]'],
//     info: 'Set or Reset Custom Server Prefix',
//     perm: 'ADMINISTRATOR',
//     time: 15000,
//     guild: true,
//     run: async () => {
//         const { message, args, guilds } = require('../index');
//         if (!args[1]) {
//             await guilds.destroy({ where: { id: message.guild.id } });
//             return message.channel.send(`Sucessfully Reset ${message.guild.name}'s Prefix.`);
//         }
//         if (args[1].length > 10) {
//             return message.channel.send('Prefix Cannot Be Longer Than 10 Characters.');
//         }
//         await guilds.destroy({ where:{ id: message.guild.id } });
//         const user = await guilds.create({
//             id: message.author.id,
//             prefix: args[1]
//         });
//         message.channel.send(`Sucessfully Set ${message.guild.name}'s Prefix to **\`${user.prefix}\`**`);
//     }
// };