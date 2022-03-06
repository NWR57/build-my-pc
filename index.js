const Discord = require('discord.js');
const client = new Discord.Client({ intents : 32767 });
const keepAlive = require('./content/server');
keepAlive();
const { prefix, color, ownerId } = require("./content/utils/config.json");

client.pr_commands = new Discord.Collection();
client.sl_commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.settings = { prefix, color, ownerId };

for(let handler of  ["sl_command", "pr_command", "event"]) require(`./handlers/${handler}`)(client);

// client.on('ready', () => {  
//   console.log(`Logged in as ${client.user.tag}`);
//   client.user.setActivity(`${prefix}help`, { type: 'LISTENING' });  
//   keepAlive();  
// });

client.on('messageCreate', async message => {
  // if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  // const args = message.content.slice(prefix.length).trim().split(' ');
  // const command = args.shift().toLowerCase();
  
  // // if(command == 'ping') {
  // //   message.reply('Pong!')
  // // }
  // if(command === 'budget' && args[0] >= 30 && 34 >= args[0]){
  //  builds.get('30-34k').run()
  // }
})

client.login(process.env.token)