const Discord = require('discord.js')
const { prefix } = require('../../content/utils/config.json')

module.exports = {
  name : 'budget',
  usage : '.budget <amount>',
  description : 'yes',
  run : async(client, message) => {
        let intel =new Discord.MessageEmbed()
          .setTitle('Here is the intel build for budget 30-34k')
          .setDescription('*This build consists of products and parts which may have different price due to the inconsistency of the PC parts market. Please forgive any inconvenience for that cause.*')

          .addFields([
          {
            name : 'CPU',
            value : 'Intel i3 = 10,000tk',
            inline : true
          },
          {
            name : 'Motherboard',
            value : 'Some random Mobo',
            inline : true
          },
          {
            name : 'GPU',
            value : '4090',
            inline : true
          },
          {
            name : 'Power Shroud',
            value : 'A lot',
            inline : true
          },
          {
            name : 'RAM',
            value : 'DDR4 Tridents Z or some shit idk',
            inline : true
          },
          {
            name : 'Cooler',
            value : 'Akij fan',
            inline : true
          },
          {
            name : 'Storage',
            value : 'SSD',
            inline : true
          },
          {
            name : 'Storage 2',
            value : 'M.2 SSD Basically the same thing',
            inline : true
          }
          ])
  }
}
