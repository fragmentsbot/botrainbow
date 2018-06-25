const Discord = require("discord.js");
const color = require("./colors.json");
const help = require("./helpcommand.js");

module.exports.success = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Pedido por" + message.author.tag, message.author.avatarURL)
    .setColor(color.green)
    .setTitle("Successo")
    .setDescription(msg)

    message.channel.send(embed);
}

module.exports.picture = (message, picture) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Pedido por" + message.author.tag, message.author.avatarURL)
    .setColor(color.purple)
    .setImage(picture)

    message.channel.send(embed);
}

module.exports.error = (message, error) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Pedido por " + message.author.tag, message.author.avatarURL)
    .setColor(color.red)
    .setTitle("Erro!")
    .setDescription(error)

    message.channel.send(embed);
}

module.exports.info = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Pedido por " + message.author.tag, message.author.avatarURL)
    .setColor(color.blue)
    .setDescription(msg)

    message.channel.send(embed);
}

module.exports.help = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor("Pedido por " + message.author.tag, message.author.avatarURL)
    .setTitle("Comandos!")
    .setColor(color.blue)

    .setDescription("Mostra os comandos do bot")
    .addField(":bulb: Comandos gerais", 
    help.command("rainbow", "Arcoiru!") +
    help.command("ping", "Latencia do bot"))

    .addField(":seedling: Comandos animais",
    help.command("cat", "Mostra um gato aleatorio") +
    help.command("shibe", "Mostra um shibe aleatorio") +
    help.command("dog", "Mostra um cachorro aleatorio"))
        
    .setColor(color.blue)

    message.channel.send(embed);
}
