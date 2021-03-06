const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
    name: "unbanall", 
  aliases: ['uball'],
  description: 'Can unbanll all the users',
   category: "Moderation",
  example: `+unbanall`,


    async execute(message, args, client) {
        const noadmin = new Discord.MessageEmbed()
            .setDescription(`*You are missing \`ADMINISTRATOR\` permissions to perform this execution.*`);

                if (message.member.hasPermission("ADMINISTRATOR")) {
                    message.guild.fetchBans().then(bans => {
                        if (bans.size == 0) {{
              const embed = new MessageEmbed()
               .setDescription(`There are no banned users.`)
               .setColor('RANDOM')
                 message.lineReplyNoMention(embed)
            }   
                            
                        } else {
                            bans.forEach(ban => {
                                message.guild.members.unban(ban.user.id);
                            })
                            const emb = new Discord.MessageEmbed()
	.setTitle('Ubanned all')
	.setDescription(`Successfully unbanned all the banned users\n**Moderator:** <@${message.author.id}>`)

	.setColor("#FF0000")
        message.lineReplyNoMention(emb);
                            
                        }
                    }
                    )
                } else {
                    return await message.lineReplyNoMention(noadmin);
      }
  }
}
