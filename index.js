const Discord = require("discord.js");
const intents = new Discord.Intents(32767); 
const client = new Discord.Client({ intents });;
const config = require('./config.json');


let prefix = config.prefix;


client.on("ready", () => {
    console.log('Bot Online!');   
});


client.on("message", async message => {
    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();


    
    if(!message.content.startsWith(prefix)) return;
    
    if(message.author.bot) return;

    if (message.content.startsWith(prefix + "hello")) {

      message.channel.send("Hello World!")

    };

});

client.login(config.token);