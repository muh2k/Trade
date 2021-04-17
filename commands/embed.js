const prefix = '_';
module.exports = {
    name: 'embed',
    description: "this is a simple embed command",
    async  execute(message, args){
        const Discord = require('discord.js');

            const embed = new Discord.MessageEmbed()
                .setTitle('This is a test Embed.')
                .setURL('https://cdn.discordapp.com/avatars/718082381013057557/77b399c038bcf5d1dbf5c01f892b86cf.webp')
                .setAuthor('you')
                .setDescription('This is a test Description which we will see.')
                .setColor('#FF2D00')
                .setThumbnail('https://media.discordapp.net/attachments/788175987417939995/794630136543576064/psyops-sona-vi-shen-master-yi-ezreal-lol-uhdpaper.com-4K-7.2644-wp.thumbnail.jpg?width=823&height=463')
                .setImage('https://media.discordapp.net/attachments/788175987417939995/794630136543576064/psyops-sona-vi-shen-master-yi-ezreal-lol-uhdpaper.com-4K-7.2644-wp.thumbnail.jpg?width=823&height=463')
                .setFooter('This is a example footer', 'https://media.discordapp.net/attachments/788175987417939995/794630136543576064/psyops-sona-vi-shen-master-yi-ezreal-lol-uhdpaper.com-4K-7.2644-wp.thumbnail.jpg?width=823&height=463')
                .addFields(
                    { name: 'Test Number 1', value: 'This is a example value', inline: true},
                    { name: 'Test Number 2', value: 'This is a example value', inline: true},
                    { name: 'Test Number 3', value: 'This is a example value'},
                    { name: 'Test Number 4', value: 'This is a example value'}
                )
                .setTimestamp()
        
        
            message.channel.send(embed);


    }

}