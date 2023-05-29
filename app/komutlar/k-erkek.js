const discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kkanal_${message.guild.id}`)
let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`)
let erkekrol = db.fetch(`erkekr_${message.guild.id}`)
let yetkili = db.fetch(`yetkilir_${message.guild.id}`)
let sohbet = db.fetch(`skanal_${message.guild.id}`)
let tag = db.fetch(`tag_${message.guild.id}`)



 
if(!message.member.roles.cache.has(yetkili))  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanmak İçin Gerekli Yetkiniz Yok!**`)
if(message.channel.id !== kanal) return message.channel.send(`** Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!**`)


let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Bir Kişi Belirt!**`)
let isim = args[1]
if (!isim) return message.channel.send(`**Bir İsim Belirt!**`)
let yaş = args[2]

if(isim) member.setNickname(`${tag} ${isim}`);
member.roles.remove(kayıtsız)
member.roles.add(erkekrol)
const kayıtolan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

db.add(`erkek+_${message.author.id}`, 1)

const embed = new discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setAuthor(client.user.username, client.user.avatarURL())  
.setColor("#f1ebeb")
.setDescription(`${member} Kullanıcının ismi \`${tag} ${isim}\` olarak değiştirildi ve <@&${erkekrol}> rolü verildi!`)
message.channel.send(embed)


client.channels.cache.get(sohbet).send(`${member} **Sunucumuza Hoşgeldin!**`)

}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
}