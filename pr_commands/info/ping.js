module.exports = {
    description: "Get the websocket ping of the message.",
    run: (client, message) => {
        return message.channel.send(`Ping is \`${client.ws.ping}\` ms.`)
    }
};