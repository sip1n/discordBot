const Discord = require('discord.js');
const Config = require('./config.js')

const {Client, Intents} = require('discord.js');

const client = new Discord.Client({
     intents: [
         Intents.FLAGS.GUILDS,
         Intents.FLAGS.GUILD_MESSAGES
        ] 
    });

    const prefix = '-';



client.once('ready', () => {
    console.log('SipBot ready to serve!');
});

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        message.channel.send('pong');
    } else if (command === 'maps'){
        message.channel.send('https://www.google.fi/maps/search/');
    }
});








client.login(Config.token);