const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" Bu komutu kullanabilmek için`Yönetici` yetkisine sahip olmalısın.");
  
  let tag = args[0];
  if (!tag) return message.channel.send("**Bir Tag Belirt!**")
  
  db.set(`tag_${message.guild.id}`, tag)
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))  
  .setColor("#f1ebeb")
  .setDescription(`Tag Başarıyla Ayarlandı! : \`${tag}\``)
  message.channel.send(embed)
   
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
};