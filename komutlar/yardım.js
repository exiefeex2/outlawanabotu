const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.RichEmbed()
    .setDescription(`Gustav'a Aittir | Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **tr**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(`Rütbeler`, `\`rütbe-ekle\`, \`rütbe-sil\`, \`rütbe-liste\``)

    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
//DevTR Kodlayan The Journey