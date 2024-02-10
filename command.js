const { REST, Routes } = require('discord.js');
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];
const rest = new REST({ version: '10' }).setToken(
  'MTIwNTk4MzY0NDk1MTM3OTk5OA.GD8c3B.XYiNyKuNmeL-8QBiEoJOadVfNkkOsmshJY1HM4'
);
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1205983644951379998'), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
