const { MessageEmbed } = require('discord.js')
const { prefix } = require('../../content/utils/config.json')

module.exports = {
    description: "Help Command",
    run: (client, message) => {
        const helpEmbed = new MessageEmbed()
      .setTitle('Here are some commands you can use')
      .setDescription('If you are facing any bug or issue, maybe just need help in general join our discord server [here](https://discord.gg/A4AaAAcZ5B).')
      .addFields([
        {
          name : 'Ping',
          value : '`.ping` || Gives you a websocket ping hashrate',
          inline : true
        },
        {
          name : 'Budget',
          value : '`.budget <amount>` || Gives you a perfect pc build for your price range',
          inline : true
        },
        {
          name : 'Follow',
          value : '`.follow` || Gives you all necessary links for tech updates and more',
          inline : true
        },
        {
          name : 'Info',
          value : '`.info` || Gives you detailed information about this bot',
          inline : true
        }
      ])

      return message.reply({ embeds : [ helpEmbed ] })
    }
};