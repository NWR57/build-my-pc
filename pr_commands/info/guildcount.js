const { ownerID, prefix } = require('../../content/utils/config.json')
module.exports = {
    description: "Get the websocket ping of the message.",
    run: async(client, message) => {
      if(!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
        const servers = await client.guilds.cache.size
if(command === 'guildcount' && message.author.id === '832922325149810688'){

    return message.reply(`I am in ${servers} servers at this very moment, Sir!`)
} else {
  return message.reply('This is a owner only command')
}
    }
};