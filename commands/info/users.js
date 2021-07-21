const Discord = require('discord.js');
const {
    PREFIX
} = require('../../config');

module.exports = {
    config: {
        name: 'users',
        category: 'info',
        description: 'Displays users on bot -- DEV COMMAND!',
        usage: `£users`,
        examples: 'm/£users',
        aliases: []
    },
    run: async (client, message, args) => {
        const clientguilds = client.users.cache;
        const clientservers = client.guilds.cache;

        const embed = new Discord.MessageEmbed()
            .setAuthor('Bot User list', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            .setTitle('Users connected to bot:')
            .setColor('RANDOM')
            .setDescription(clientguilds.map(g => g.username) || 'None' + ' | ' + clientservers.map(g => g.name) || 'None')
            .setFooter(`Total Users: ${client.users.cache.size} connected to ${client.guilds.cache.size} servers `)
            .setTimestamp()
        message.channel.send(embed);
    }
}