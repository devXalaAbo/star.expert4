const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "se",
  category: "fun",
  description: "```Converting Server emoji to PNG/GIF!```",
  async execute(message, args) {

    const emoji = args[0];
    if (!emoji) return message.lineReplyNoMention(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      
      const Added = new MessageEmbed()
        .setTitle("Emoji Converter")
        .setColor("#FF0000")
        .addField('📎 • Link', `[Click Me](${Link})`)
        .setImage(Link);
      return message.lineReplyNoMention(Added);
    } else {
      let CheckEmoji = (emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me A Valid Emoji!`);
      message.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    }
  }
};
