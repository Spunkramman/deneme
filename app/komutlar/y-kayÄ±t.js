const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  const prefix = ayarlar.prefix
  
  
   
  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Kayıt Botu")
    .setColor("#ff0000")
    .setFooter(`Spunkramman Yardım Menüsü`)
    .addField(
      "__Yardım Menüsü__", `
      
\ \`${prefix}kızrol\` : **Kız Rolünü Ayarlar Ayarlar**

\ \`${prefix}erkekrol\` : **Erkek Rolünü Ayarlar Ayarlar**

\ \`${prefix}kayıtkanal\` : **Kayıt Kanalını Ayarlar**

\ \`${prefix}sohbetkanal\` : **Sohbet Kanalını Ayarlar**

\ \`${prefix}girişkanal\` : **Giriş Kanalını Ayarlar**

\ \`${prefix}tag\` : **Tag Ayarlar ( İsterseniz Ayarlamayın! )**

\ \`${prefix}yetkilirol\` : **Yetkili Rolü Ayarlar**

\ \`${prefix}kayıtsızrol\` : **Kayıtsız Rolü Ayarlar**

\ \`${prefix}kayıtsıfırla\` : **Kayıt Ayarlarını Sıfırlar**

\ \`${prefix}erkek\` : **Erkek Kayıt Yapar**

\ \`${prefix}kız\` : **Kız Kayıt Yapar**


`);
 
  message.channel.send(embed);                                          
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y-kayıt"],
  permLevel: 0
};



exports.help = {
  name: "y-kayıt",
};