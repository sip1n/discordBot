module.exports = {
    name: 'rolecheck',
    description: "Checks if you have role",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.roles.cache.some(r => r.name === "Mod")){
            message.channel.send('You have a Mod role already');
        } else {
            message.channel.send('You dont have mod role yet so let me fix it');
            message.member.roles.add(role);
        }

        

    }
}