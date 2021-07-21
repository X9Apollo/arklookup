var Discord = require('discord.js')
const {
    PREFIX
} = require("../../config")
const n = require('../../config')

module.exports = {
    config: {
        name: "dev",
        aliases: ['developer', 'devcmds'],
        category: "info",
        description: "Displays dev commands",
        usage: "m/dev"
    },
    run: async (bot, message, args) => {
        if (message.author.id !== n.OWNER_ID) return message.reply('This is a developer command!')

        let devEmbed = new Discord.MessageEmbed()
        .setAuthor('Developer Commands', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
        .setColor('RANDOM')
        .setTitle('Bot Developer Commands!')
        .addField('Servers', 'Usage: `£servers`\nDescription: Displays List of servers bot is on. \nExample: `£servers`')
        .addField('Users', 'Usage: `£users`\nDescription: Displays List of users in the servers the bot is on. \nExample: `£users`')
        .setFooter(`Total Users: ${bot.users.cache.size} on ${bot.guilds.cache.size} servers!`)
        .setTimestamp()
        message.channel.send(devEmbed)
    }
}