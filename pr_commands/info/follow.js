const Discord = require('discord.js')
const { prefix } = require('../../content/utils/config.json')

module.exports = {
  name : 'follow',
  usage : '.budget <category>',
  description : 'yes',
  run : async(client, message) => {
    return message.reply('This feature is not available yet. Please be patient it will be here soon! Sorry for the inconvinience')
  }
}
