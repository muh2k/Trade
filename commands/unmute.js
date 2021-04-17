const prefix = '_';

module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    async execute(message, args){
       
          if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("Missing Permissions!").then(m => m.delete(5000));
        }
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'children of god');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
        }
    }
}
