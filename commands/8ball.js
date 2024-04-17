module.exports = {
   name: '8ball',
   aliases: ['ball', 'fortune'],
   description: 'Posez une question à la boule magique et elle vous donnera une réponse.',

   reqArgs: false, 

   category: 'Divertissement',

   cooldown: 5000,

   async run(ctx) {
      // Obtenir la question
      const question = ctx.args.join(' ');
      if (!question) return ctx.sendText("Vous devez poser une question à la boule magique.");

      const responses = [
         'Oui.',
         'Non.',
         'Peut-être.',
         'Probablement.',
         'Probablement pas.',
         'Enfaite tg tu me soul.',
         'Je ne suis pas sûr.',
         'Les perspectives semblent bonnes.',
         'Les perspectives semblent sombres.'
      ];

      const response = responses[Math.floor(Math.random() * responses.length)];
      await ctx.sendText(`Question: ${question}\nRéponse: ${response}`);
   },
};
