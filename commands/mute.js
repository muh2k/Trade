const ms = require('ms');
const prefix = '_';
module.exports = {
  name: 'mute',
  description: "mutes the guy",
  async execute(message, args){
            if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("Missing Permissions!").then(m => m.delete(5000));
        }
        const target = message.mentions.users.first();
        if (target) {
 

            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {

                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }

            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);

            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
        }
    }
}
 


        
    
