module.exports = {
    name: 'embed',
    Description: "Upotukset",
    execute(message, args, Discord) {

        // this defines the embed that bot is going to post when '-command' command is requested on discord
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00651f')
        .setTitle('Embed')
        .setDescription('Testing embed messages')
        .setImage('https://via.placeholder.com/150')
        .addFields(
            {name: 'test 1', value: 'test 1', inline: true},
            {name: 'test 2', value: 'test 2', inline: true},
            {name: 'test 3', value: 'test 3', inline: true}
        )
        .setFooter('Herttoniemest ikuisuuteen');

        // sends embedded message and add 2 reactions to it
        message.channel.send({embeds: [newEmbed]}).then(sentMessage => {
            sentMessage.react('👍');
            sentMessage.react('👎');
        });
        
    }
}