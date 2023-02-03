require("dotenv").config();
const { Client, IntentsBitField , EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;
    interaction.reply(`The sum is ${num1 + num2}`);

  }
  if(interaction.commandName === 'embed'){
    const embed = new  EmbedBuilder().setTitle("Embed title")
    .setDescription('this is an embed description');
    interaction.reply({embeds: [ embed]});


  }
});

client.login(process.env.TOKEN);
