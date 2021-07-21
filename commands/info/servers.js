const Discord = require('discord.js');
const {
    PREFIX
} = require('../../config')

module.exports = {
    config: {
        name: "servers",
        category: "info",
        description: "Displays Servers Bot is connected to, DEV COMMAND!",
        usage: (`m/servers`),
        examples: "m/£servers",
        aliases: [],
    },
    run: async (client, message, args) => {
        const notEmbed = new Discord.MessageEmbed()
            .setAuthor('Error!', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            .setTitle(`Sorry ${message.author.tag}, This is a Developer only Command!`)
            .setColor('RANDOM')

        if (message.author.id !== "530888419891740675") return message.channel.send(notEmbed);

        let clientguilds = client.guilds.cache
        let servers = clientguilds.map(g => g.name) || "None"
        const embed = new Discord.MessageEmbed()
            .setAuthor('Bot Server List', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            .setTitle('Bot Connected to:')
            .setColor('RANDOM')
            .setDescription(clientguilds.map(g => g.name) || "None")
            .setFooter(`Total Servers: ${client.guilds.cache.size} `)
            .setTimestamp()
        message.channel.send(embed)
    }
}