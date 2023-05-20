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
    .setName("davet")
    .setDescription("Botu Sunucuna Davet Edersin.")
    .setDMPermission(true),

  async execute(client, interaction) {
    await interaction.deferReply({ ephemeral: true });
    const db = new JsonDatabase({ databasePath: `./Database/SeçimBot.json` });

    const Embed = new EmbedBuilder()
      .setColor("Blurple")
      .setAuthor({
        name: `14 Mayıs 2023 Seçim Takip Botu | Butonlar`,
        iconURL: client.user.avatarURL(),})
      .setDescription(`> <:Kask:1109558880205279263> Bir öneri, hata bildirmek için veya karalisteye alındıysan açtırmak için destek sunucuma katılabilirsin. \n \n > <:Kutu:1109559213635686470> Seçim kurallarını aşağıdaki resimden öğrenebilirsin. Ve butondan beni sunucuna ekliyebilirsin.`)
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL() })
      .setImage("https://media.discordapp.net/attachments/927908124772409387/1109553410753183744/20190322-2-35581787-42871553-web-7rek.jpg?width=416&height=559")
      .setTimestamp();

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
    const row1 = new ActionRowBuilder().addComponents(destekButon, ekleButon);

    await interaction.followUp({ embeds: [Embed], components: [row1] });
  },
};