const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");
const prefix = ("+");

module.exports = {
  name: "Info",
  aliases: ["info", "i"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`Invite RupoBot To Your Server By[click here](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot)\n\nThere All Info Commands List \n\n${prefix}help, ${prefix}ping, ${prefix}prefix, ${prefix}uptime, ${prefix}avatar, ${prefix}invites, ${prefix}suggest, ${prefix}userinfo, ${prefix}serverinfo, ${prefix}github, ${prefix}support, ${prefix}botinfo, ${prefix}weather, ${prefix}embed`)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(helpEmbed).catch(console.error);
  }
};