const Discord = require("discord.js");
const { lineReply } = require("discord-reply"); 

module.exports = {
  name: "vmute",
  description: "voicemute a user",
  category: "admin",
  botPermissions: ["MUTE_MEMBERS"],
  memberPermissions: ["MUTE_MEMBERS"],
  async execute(message, args, client) {
    const muteUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    const muteReason = args.join(" ").slice(23);

    if (muteUser.voice.serverMute) {
      return message.lineReplyNoMention(
        "**User is not in a voice channel or is already muted**"
      );
    }

    muteUser.voice.setMute(true, "muteReason");

    muteUser.user.send(
      `You've been **Muted** from **${message.guild.name}**, Reason: **${muteReason}**`
    );
    message.lineReplyNoMention(
      `**${muteUser.user.tag}** was successfully muted from the server. Reason: **${muteReason}**. I have also send a DM letting the person know.`
    );
  },
};
