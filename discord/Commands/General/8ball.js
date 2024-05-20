module.exports.run = (client, message, args) => {
    // Liste de réponses possibles
    const responses = [
        "🟢 Yes",
        "🔴 No",
        "🟡 Maybe",
        "🟠 Probably",
        "🔵 I don't know",
        "🟣 Ask again later",
        "🟤 Focus and ask again"
    ];

    // Vérifier si une question est posée
    if (!args[0]) {
        return message.reply("Please ask a question!");
    }

    // Sélectionner une réponse aléatoire
    const response = responses[Math.floor(Math.random() * responses.length)];

    // Envoyer la réponse dans le canal
    message.channel.send(`🎱 **Magic 8 Ball** 🎱\n\n**Question:** ${args.join(" ")}\n**Answer:** ${response}`);
};

module.exports.help = {
    name: "8ball",
    aliases: ["fortune"],
    description: "Ask a question to the Magic 8 Ball",
    usage: "<question>",
    category: "Fun",
    cooldown: 5 // En secondes
};

module.exports.config = {
    restricted: false,
    ownerOnly: false
};
