const Discord = require('discord.js');

const {Client, Intents} = require('discord.js');

const client = new Discord.Client({
     intents: [
         Intents.FLAGS.GUILDS,
         Intents.FLAGS.GUILD_MESSAGES
        ] 
    });

const Config = require('./config.js');

const fs = require('fs');

const prefix = '-';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('SipBot ready to serve!');
});

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'kvg'){
        client.commands.get('kvg').execute(message, args);
    } else if (command === 'maps'){
        client.commands.get('maps').execute(message, args);
    } else if (command == 'rolecheck'){
        client.commands.get('rolecheck').execute(message, args);
    }
});








client.login(Config.token);