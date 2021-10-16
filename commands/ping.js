module.exports = {
    name: 'ping',
    description: "Ping Pong command",
    execute(message, args){
        message.channel.send('pong');
    }
}