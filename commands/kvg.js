module.exports = {
    name: 'kvg',
    description: "Kato Vittu Googlesta",
    execute(message, args){

        // if(message.member.roles.cache.has('898847944944549888')){
            message.channel.send('KVG https://www.google.com');
        // } else {
        //     message.channel.send(message.member.toString() + ' You dont have permission to use this command');
        // }
    }
}