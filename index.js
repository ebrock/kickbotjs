const Discord = require('discord.js');

const client = new Discord.Client();
const config = require('./config.json');
const giphy = require('giphy-api')(config.giphy);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.users.array()); // print all users in server.
  // Test guildMemberAdd.
  const user = client.users.get('283737656247189524');
  client.emit('guildMemberAdd', user);
});

// Simple test.
client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});

// Command test.
client.on('message', msg => {
  // If no prefix, ignore (return).
  if (msg.content.indexOf(config.prefix) !== 0) return;

  // Parse message.
  // const words = msg.content.slice(1);
  const command = msg.content.slice(1).split(' ')[0].toLowerCase();
  const user = msg.mentions.users.first().username;
  console.log(`cmd: ${command}, user: ${user}`);

  // If slap...
  if (command === 'slap') {
    msg.channel.send(`**${msg.author.username}** slapped **${user}**`);
    giphy.random('slap').then((res) => {
      msg.channel.send(res);
    });
  }
});

client.on('guildMemberAdd', (member) => {
  console.log(`${member} has joined the server!`);
});

client.login(config.test);
