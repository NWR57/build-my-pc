const { inviteLink, websiteLink } = require('../../content/utils/config.json')

module.exports = {
    description: "Get the websocket ping of the message.",
    run: (client, message) => {
      return message.reply(`Invite the bot with this link : ${inviteLink}
OR
Visit our website at : ${websiteLink}`)
    }
};