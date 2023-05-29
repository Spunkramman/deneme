const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {


  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" Bu komutu kullanabilmek için`Yönetici` yetkisine sahip olmalısın.");
  

    db.delete(`kkanal_${message.guild.id}`)
    db.delete(`kayıtsız_${message.guild.id}`)
    db.delete(`erkekr_${message.guild.id}`)
    db.delete(`erkekr_${message.guild.id}`)
    db.delete(`yetkilir_${message.guild.id}`)
    db.delete(`skanal_${message.guild.id}`)
     db.delete(`tag_${message.guild.id}`)

  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))  
  .setColor("#f1ebeb")
  .setDescription(`**Kayıt Başarıyla Sıfırlandı!**`)
  message.channel.send(embed)
   
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıtsıfırla',
};