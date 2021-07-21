var Discord = require('discord.js')
const {
    PREFIX
} = require("../../config")
const n = require('../../config')
const snekfetch = require('snekfetch')

module.exports = {
    config: {
        name: "dedi",
        aliases: ['d'],
        category: "lookup",
        description: "Displays Unofficial server info",
        usage: "m/dedi <servername>"
    },
    run: async (bot, message, args) => {
        snekfetch.get("http://arkdedicated.com/xbox/cache/unofficialserverlist.json").then(r => {
            let body = r.body;
            const server = args.join(" ");
            if (!server) return message.channel.send("Supply a server name");
            let e = body.filter(cluster => cluster.Name.toLowerCase().includes(server.toLowerCase()) && cluster.GameMode === "TestGameMode_C");
            const dediembed = new Discord.MessageEmbed().setTitle('Dedi Lookup');
            e.forEach(un => {
                dediembed.addField("**" + un.Name + "**", '**IP: **``' + un.IP + '``\n**Port: **``' + un.Port + '``\n**Players: **``' + un.NumPlayers + '/' + un.MaxPlayers + '``\n**Map: **``' + un.MapName + '``', true)
            })
            dediembed.setFooter(`Reqeusted by: ${message.author.tag} | £help`);
            dediembed.setColor('RANDOM')
            dediembed.setAuthor('Unofficial Lookup', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            message.channel.send(dediembed).catch(error => {
                if (error.code === 50035) return message.reply(`Embed Size Exeeds 6000 Please provide more info! Code: '${error.code}' \nType: **-code 50035** for more info`)
            });
        });
    }
}