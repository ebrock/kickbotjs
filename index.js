const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong!");
    }
});

client.login("NDI5NDc1MzQ4OTA0ODA0MzUz.DaCOGg.vAPFav-JnkRPhNbgeJmAXeb3txk")