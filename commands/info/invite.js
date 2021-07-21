var Discord = require('discord.js')
const {
    PREFIX
} = require("../../config")
const n = require('../../config')

module.exports = {
    config: {
        name: "invite",
        aliases: ['inv'],
        category: "info",
        description: "Invite the Bot",
        usage: "m/invite"
    },
    run: async (bot, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setAuthor('Ark Lookup Bot', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            .setTitle('Invite Lookup bot')
            .setDescription('Link: https://discord.com/api/oauth2/authorize?client_id=867079647380111412&permissions=8&scope=bot')
            .setFooter(`Requested by ${message.author.tag} | £help`)
            .setTimestamp()
            .setColor('RANDOM')
        message.channel.send(inviteembed);
    }
}