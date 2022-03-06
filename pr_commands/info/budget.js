const Discord = require('discord.js')
const { prefix } = require('../../content/utils/config.json')

module.exports = {
  name : 'budget',
  usage : '.budget <amount>',
  description : 'yes',
  run : async(client, message) => {

if(!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();
   if(command === 'budget' && args[0] >= 30 && 34 >= args[0]) {
     const row = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Select CPU Type')
          .addOptions([
            {
              label : 'Intel',
              description : 'Intel is great for productive works',
              value : 'intel'
            },
            {
              label : 'AMD',
              description : 'AMD is better for gaming',
              value : 'amd'
            }
          ])
        )

        let pcbuildEmbed = new Discord.MessageEmbed()
        .setTitle('Build')
        .setDescription('Yeah fr')
  let burger = await message.reply({ content :' ',ephemeral: true, embed : [pcbuildEmbed], components: [row]}) 
        let intel =new Discord.MessageEmbed()
          .setTitle('101 Intel xD')
          .setDescription('COol')
        let amd =new Discord.MessageEmbed()
          .setTitle('102 AMD Ryzen xD')
          .setDescription('COol but not really')



  const collector = message.channel.createMessageComponentCollector({
    componentType : 'SELECT_MENU'
  })      
        collector.on('collect', async collected => {
          const value = collected.values[0]

          if(value === 'intel') {
          collected.reply({embeds:[intel], ephemeral:true})
          }
          if(value === 'amd') {
          collected.reply({embeds:[amd], ephemeral:true})
          }
        })
     
   }  
  }
}