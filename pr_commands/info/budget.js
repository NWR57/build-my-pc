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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 40 && 45 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 50 && 55 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 60 && 70 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 90 && 100 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 100 && 110 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 120 && 130 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 140 && 160 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 170 && 190 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
    if(command === 'budget' && args[0] >= 200 && 220 >= args[0]) {
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
      
        let amd =new Discord.MessageEmbed()
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
