var Discord = require('discord.js')
const {
    PREFIX
} = require("../../config")
const n = require('../../config')

module.exports = {
    config: {
        name: "help",
        aliases: ['h'],
        category: "info",
        description: "Displays help page",
        usage: "m/help"
    },
    run: async (bot, message, args) => {

        let apiping = Math.round(bot.ws.ping)

        const helpembed = new Discord.MessageEmbed()
            .setTitle('Help Menu!')
            .setThumbnail('https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            .setColor('RANDOM')
            .setDescription('Developer: \`X9 APOLLO#6358\` \nVersion: ' + `\`${n.VERSION}\` ` + `\n Ping: \`${apiping}ms\` ` + '\n**Commands:**')
            .addField('Dedi Lookup', 'Usage: `£dedi <servername>`\nDescription: Displays Info on Unofficial servers. \nExample: `£dedi lions`')
            .addField('Official Lookup', 'Usage: `£o <servernumber>`\nDescription: Displays Info on Official servers. \nExample: `£o 1105`')
            .addField('Smalls Lookup', 'Usage: `£s <servernumber>`\nDescription: Displays Info on SmallTribes servers. \nExample: `£s 12`')
            .setFooter(`Requested by ${message.author.tag} | £help`)
            .setTimestamp()
            .setURL('https://discord.com/api/oauth2/authorize?client_id=867079647380111412&permissions=8&scope=bot')
        message.channel.send(helpembed);
    }
}