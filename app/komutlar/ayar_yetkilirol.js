const discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" Bu komutu kullanabilmek için`Yönetici` yetkisine sahip olmalısın.");


    let rol = message.mentions.roles.first()  || message.guild.roles.cache.get(args[0])  
    if (!rol) {
      return  message.channel.send("**Bir Rol Belirtin!**")
    }
    db.set(`yetkilir_${message.guild.id}`, rol.id)
    const embed2 = new discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))  
    .setColor("#f1ebeb")
    .setDescription(`Yetkili Rol Başarıyla Ayarlandı! : ${rol}`)
    message.channel.send(embed2)
      
    }
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'yetkilirol',
}