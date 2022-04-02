const { MessageEmbed} = require('discord.js')
const { serverLink } = require('../../content/utils/config.json')

module.exports = {
  name : 'follow',
  usage : '.budget <category>',
  description : 'yes',
  run : async(client, message) => {
    const followEmbed = new MessageEmbed()
    .setTitle('')
    .setDescription(`**Also Follow Us On Social Media**`)
    .addFields(
      {
        name: "<:Youtube:847053287227785236> YouTube Channel",
        value: "If you are tech lover like us then subscribe to our [youtube channel](https://goo.gl/NwszxK) with notifications.",
        inline: true
      },
      {
        name: "<:Website:847046880080035851> Website",
        value: "Check out our website for latest tech news in bangla [here](https://www.pcbuilderbd.com/)",
        inline: true
      },
      {
        name: "<:Facebook:847046880796868618> Facebook Buy andd Sell Group",
        value: "Join this group to sell/buy components [here](https://www.facebook.com/groups/GHBS.BD)",
        inline: true
      },
      {
        name: "<:Facebook:847046880796868618> Facebook Official Group",
        value: "Join our official [facebook group](https://www.facebook.com/groups/pcbuilderbd)",
        inline: true
      },
      {
        name: "<:Facebook:847046880796868618> Facebook Problem Solving Group",
        value: "If you have any problems you can join [this group](https://www.facebook.com/groups/phd.bangladesh/)",
        inline: true
      },
      {
        name: "<:Facebook:847046880796868618> Official Facebook Page",
        value: "Like us on our official [facebook page](https://goo.gl/N3fMUV). We have weekly livestreams here. Hop in sometime to show support",
        inline: true
      }
    )
    

    return message.reply({content : `Join our discord server today for tech updates help, fun and so much more ${serverLink}`, embeds : [followEmbed]})
  }
}
