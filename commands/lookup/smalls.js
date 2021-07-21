var Discord = require('discord.js')
const {
    PREFIX
} = require("../../config")
const n = require('../../config')
const snekfetch = require('snekfetch')

module.exports = {
    config: {
        name: "s",
        aliases: ['smalls'],
        category: "lookup",
        description: "Displays SmallTribes server info",
        usage: "m/s <servernumber>"
    },
    run: async (bot, message, args) => {

        let errorembed = new Discord.MessageEmbed()
            .setDescription(`${message.author} Too many results to fit in. Define the search!`)

        snekfetch.get("http://arkdedicated.com/xbox/cache/officialserverlist.json").then(r => {
     let server = Number(args[0]);
     if (!server) return message.channel.send("Supply a server number");
     let body = r.body;
     let e = body.find(cluster => cluster.Name.endsWith("SmallTribes" + server) && cluster.ClusterId === "XboxSmallTribes");
     const resembed = new Discord.MessageEmbed().setTitle('Smalls Lookup');
     resembed.addField("**" + e.Name + "**", '**IP: **``' + e.IP + '``\n**Port: **``' + e.Port + '``\n**Players: **``' + e.NumPlayers + '/' + e.MaxPlayers + '``\n**Map: **``' + e.MapName + '``\n**Day: **``' + e.DayTime + '``', true)
            resembed.setFooter(`Reqeusted by: ${message.author.tag} | £help`);
            resembed.setColor('RANDOM')
            resembed.setAuthor('Smalls Lookup', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            message.channel.send(resembed).catch(error => {
                if (error.code === 50035) return message.channel.send(errorembed)
            });
        });
    }
}