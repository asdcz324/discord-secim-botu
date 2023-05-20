const { Discord, EmbedBuilder, ChannelType, ButtonBuilder, ActionRowBuilder, ButtonStyle, ModalBuilder, TextInputStyle, TextInputBuilder, InteractionType, PermissionsBitField, StringSelectMenuBuilder, SlashCommandBuilder, ContextMenuCommandBuilder, ApplicationCommandType } = require ("discord.js")
const { JsonDatabase } = require("wio.db")

module.exports = {
  slash: true,
  data: new SlashCommandBuilder()    
    .setName('seçim-bilgi')
    .setDescription('Seçim oylarını gösterir.')
    .setDMPermission(true),
  
async execute(client, interaction) { 
  await interaction.deferReply({ephemeral: true})
  const db = new JsonDatabase({databasePath: `./Database/SeçimBot.json`})

  const Embed = new EmbedBuilder()
    .setColor("Blurple")
    .setAuthor({name: `14 Mayıs 2023 Seçim istatistikleri`, iconURL: client.user.avatarURL()}) 
    .setDescription(`> 🗳️ **Genel** açılan toplam sandık sayısı: %100 \n > <a:d:1109548364539887666><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><a:f:1109548360391729232>\n > <:Recep:1109552746044080238> **Recep Tayyip ERDOĞAN:** \n > %49.52 (27.133.837) \n > <a:d:1109548364539887666><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><:b:1109548368675479632><:b:1109548368675479632><:b:1109548368675479632><:b:1109548368675479632><:c:1109548366104363080>\n \n > <:Kemal:1109552744374730862> **Kemal KILIÇDAROĞLU:** \n > %44.88 (24.594.932) \n > <a:d:1109548364539887666><a:e:1109548363076079696><a:e:1109548363076079696><a:e:1109548363076079696><:b:1109548368675479632><:b:1109548368675479632><:b:1109548368675479632><:b:1109548368675479632><:b:1109548368675479632><:c:1109548366104363080> \n \n > <:Zil:1106994117608739038> **Duyuru** <:Zil:1106994117608739038> : **28 Mayıs** **2.Tur** Seçimlerinin Verilerini O Gün Yasak Kalkınca Yayıcağız **1.Tur** Seçimindeki **Sinan OĞAN** ve **Muharrem İNCE**'yi Kaldırdık!`)
    .setFooter({text: interaction.user.username, iconURL: interaction.user.avatarURL()})
	  .setImage('https://media.discordapp.net/attachments/927908124772409387/1109555332675555461/pusula.jpeg?width=519&height=468')
    .setTimestamp()

    const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Canlı Takip Et')
      .setEmoji("1106994120037253141")
			.setURL("https://secim.aa.com.tr/")
			.setStyle(5)
		])
  await interaction.followUp({embeds: [Embed], components: [actionRow] })
  
  
  }
}