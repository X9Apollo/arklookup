var Discord = require('discord.js')
const {
    PREFIX
} = require("../../config")
const n = require('../../config')
const snekfetch = require('snekfetch')

module.exports = {
    config: {
        name: "o",
        aliases: ['official'],
        category: "lookup",
        description: "Displays Official server info",
        usage: "m/o <servernumber>"
    },
    run: async (bot, message, args) => {

        let errorembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Too many results to fit in. Define the search!`)

        snekfetch.get("http://arkdedicated.com/xbox/cache/officialserverlist.json").then(r => {
            let body = r.body;
            let server = Number(args[0]);
            if (!server) return message.channel.send("Supply a server number");
            let e = body.filter(cluster => cluster.Name.endsWith(server) && cluster.ClusterId === "NewXboxPVP");
            const officialembed = new Discord.MessageEmbed().setTitle('Official Lookup');
            e.forEach(un => {
                officialembed.addField("**" + un.Name + "**", '**IP: **``' + un.IP + '``\n**Port: **``' + un.Port + '``\n**Players: **``' + un.NumPlayers + '/' + un.MaxPlayers + '``\n**Map: **``' + un.MapName + '``\n**Day: **``' + un.DayTime + '``', true)
            })
            officialembed.setFooter(`Reqeusted by: ${message.author.tag} | £help`);
            officialembed.setColor('RANDOM')
            officialembed.setAuthor('Official Lookup', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            message.channel.send(officialembed).catch(error => {
                if (error.code === 50035) return message.channel.send(errorembed)
            });
        });
    }
}