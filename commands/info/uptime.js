const Discord = require('discord.js');
const {
    PREFIX
} = require('../../config')
const human = require('humanize');
const bytes = require('pretty-bytes');
const n = require('../../config')

module.exports = {
    config: {
        name: "uptime",
        category: "info",
        description: "Shows Bots Uptime",
        usage: (`£uptime`),
        examples: "m/£uptime",
        aliases: ['u'],
    },
    run: async (client, message, args) => {
        if (message.author.bot) return;

        function msToTime(duration) {
            var milliseconds = parseInt((client.uptime % 1000) / 100),
                seconds = parseInt((client.uptime / 1000) % 60),
                minutes = parseInt((client.uptime / (1000 * 60)) % 60),
                hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24),
                days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 31);
            days = (days < 10) ? "0" + days : days;
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
            return days + ":" + hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        }

        function randomColor() {
            var colors = ["#00F5FF", "#7FFFD4", "#008B45", "#FFD700", "#FF8000", "#FF0000", "#7FFF00", "#00BFFF", "	#000080", "#8A2BE2", "#FFB5C5", "#00FFF7", "#B120DF", "#DF2057", "#FFFFFF", "#B2FF00"];
            var colorNum = Math.floor(Math.random() * colors.length);
            return colors[colorNum];
        }
        let time = new Date();

        function amPm() {
            if (time.getHours() >= 11) {
                return "PM";
            } else return "AM";
        }
        var embed = new Discord.MessageEmbed()
            .setAuthor('Uptime', 'https://media.discordapp.net/attachments/770729568826687518/770730781881794580/xbox_logo-removebg-preview.png')
            .setTitle("Bot Uptime")
            .setDescription("Information for " + n.NAME)
            .setThumbnail(`${client.user.displayAvatarURL()}`)
            .setColor('RANDOM')
            .addField("Total Users Serving",
                client.users.cache.size, true)
            .addField("Uptime",
                msToTime(), true)
            .addField("Ready At",
                `${human.date('m-d-y | h:i:s', client.readyAt)} ${amPm()}`, true)
            .addField("Memory Usage",
                `Using ${bytes(process.memoryUsage().rss)}`, true)
            .addField("Total Guilds Serving",
                `${client.guilds.cache.size}`, true)
            .addField("Version",
                `${n.VERSION}`)
            .setFooter("Coded by X9 APOLLO#6385")
            .setTimestamp()
        message.channel.send(embed);
    }
}