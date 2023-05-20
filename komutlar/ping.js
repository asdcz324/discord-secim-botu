const {
  Discord,
  EmbedBuilder,
  ChannelType,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  ModalBuilder,
  TextInputStyle,
  TextInputBuilder,
  InteractionType,
  PermissionsBitField,
  StringSelectMenuBuilder,
  SlashCommandBuilder,
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");
const { JsonDatabase } = require("wio.db");

module.exports = {
  slash: true,
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Botun Pingini Gösterir.")
    .setDMPermission(true),

  async execute(client, interaction) {
    await interaction.deferReply({ ephemeral: true });
    const db = new JsonDatabase({ databasePath: `./Database/SeçimBot.json` });

    const Embed = new EmbedBuilder()
      .setColor("Blurple")
      .setAuthor({
        name: `14 Mayıs 2023 Seçim Takip Botu | Ping ve Butonlar`,
        iconURL: client.user.avatarURL(),})
      .setDescription(`> <:Ucak:1109558883032252497> Botun ping değerlerini takip edebilirsin butonda yazıyor alta bak \n \n > <:Kask:1109558880205279263> Bir öneri, hata bildirmek için veya karalisteye alındıysan açtırmak için destek sunucuma katılabilirsin. \n \n > <:Kutu:1109559213635686470> Seçim kurallarını aşağıdaki resimden öğrenebilirsin. Ve butondan beni sunucuna ekliyebilirsin.`)
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL() })
      .setImage("https://media.discordapp.net/attachments/927908124772409387/1109553410753183744/20190322-2-35581787-42871553-web-7rek.jpg?width=416&height=559")
      .setTimestamp();

    const pingButon = new ButtonBuilder()
      .setLabel(`Ping : ${client.ws.ping}ms`)
      .setEmoji("1106994115108950098")
      .setURL("https://discord.gg/rtTwrAKUaT")
      .setStyle(5);
    const destekButon = new ButtonBuilder()
      .setLabel("Destek Sunucusu")
      .setEmoji("1106969841467920474")
      .setURL("https://discord.gg/rtTwrAKUaT")
      .setStyle(5);
    const ekleButon = new ButtonBuilder()
      .setLabel("Sunucuna Ekle")
      .setEmoji("1106969829795172514")
      .setURL("https://discord.com/oauth2/authorize?client_id=956179160915673110&permissions=8&scope=bot")
      .setStyle(5);
    const row1 = new ActionRowBuilder().addComponents(pingButon, destekButon, ekleButon);

    await interaction.followUp({ embeds: [Embed], components: [row1] });
  },
};