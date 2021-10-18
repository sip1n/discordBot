module.exports = {
    name: 'rolecheck',
    description: "Checks if you have role",
    execute(message, args){
        
        //Gets the id of role named Mod from discord server (guild) that the message was sent to
        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        //Checks if the sender of that message has that role if not it gives it 
        if(message.member.roles.cache.some(r => r.name === "Mod")){
            message.channel.send('You have a Mod role already');
        } else {
            message.channel.send('You dont have mod role yet so let me fix it');
            message.member.roles.add(role);

        }
    }
}