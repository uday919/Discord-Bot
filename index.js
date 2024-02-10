const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  message.reply({
    content: 'Hi from Bot',
  });
});
client.on('interactionCreate', (interaction) => {
  console.log(interaction);
  interaction.reply('pong');
});
client.login(
  'MTIwNTk4MzY0NDk1MTM3OTk5OA.GD8c3B.XYiNyKuNmeL-8QBiEoJOadVfNkkOsmshJY1HM4'
);
