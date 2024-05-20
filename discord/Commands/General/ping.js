module.exports.run = async (client, message) => {
    const msg = await message.channel.send("Calculating ping...");
    const ping = msg.createdTimestamp - message.createdTimestamp;
    msg.edit(`Bot's ping: ${ping}ms`);
};

module.exports.help = {
    name: "ping",
    aliases: ["pi"],
    description: "Check the bot's ping",
    usage: "bot ping",
    category: "General",
    cooldown: 10 // Compté en millisecondes
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};
