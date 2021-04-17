const Discord = require('discord.js');
const ms = require('ms');
const prefix = '_';
module.exports= {
    name: 'Ping',
    descriptions: "latency of the bot",
   async execute(message, args){

module.exports.run = async function (client, message, args, config, gdb, prefix, permissionLevel, db) {
    let botMsg = await message.channel.send("Pinging")
                    botMsg.edit({ 
                    embed: {
                    name: "ping",
                    title: "📶 Ping",
                    color: 0x2ed32e,
                    description: [
                        "**Server**: `" + (message.createdAt - message.createdAt) + "ms`",
                        "**API**: `" + Math.round(client.ws.ping) + "ms`",
                        "**Uptime**: `" + msToTime(client.uptime) + "`"
                    ].join("\n"),
                    footer: { text: "Requested by " + message.author.tag, icon_url: message.author.displayAvatarURL }
                }
            })
        }

        function msToTime(ms) {        }

    }

}