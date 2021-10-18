module.exports = {
    name: 'maps',
    description: "Sends link to google maps",
    execute(message, args){

        message.channel.send('https://www.google.fi/maps/search/');
        
    }
}