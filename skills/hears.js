// Botkit is powered by "skills". For example this one is "hears"
// Basically the bot listens to to direct mentions and mentions (of the bot)
// and if it hears the word "!thanks" then the skill is triggered
// try changing the trigger word
// here are the docs for more info https://botkit.ai/docs/v0/core.html
// and the Botkit Discord code which has some great examples!
// https://github.com/brh55/botkit-discord
module.exports = function(controller) {
  controller.hears("-thanks", ["direct_mention", "mention"], (bot, message) => {
    let response;
    let sender = message.user;

    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();

    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users
      .filter(user => user.bot === false)
      .last();

    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own.
    let responses = [
      `${recipient} got kudos from ${sender} 🎉`,
      `${sender} thinks ${recipient} is awesome! ✨`,
      `Hey ${recipient}! ${sender} appreciates you! 😍`,
      `Hey ${recipient}! ${sender} thinks you rule! 💪`
    ];

    response = responses[Math.floor(Math.random() * responses.length)];

    bot.reply(message, response);
  });
};

module.exports = function(controller) {
  controller.hears(
    "-gracias",
    ["direct_mention", "mention"],
    (bot, message) => {
      let response;
      let sender = message.user;
      let recipient = message.mentions.users
        .filter(user => user.bot === false)
        .last();
      let responses = [
        `${recipient} tiene la gratitud de ${sender} 🎉`,
        `${sender} piensa que ${recipient} es asombroso! ✨`,
        `Hey ${recipient}! ${sender} te aprecia 😍`,
        `Hey ${recipient}! ${sender} thinks you rule! 💪`
      ];

      response = responses[Math.floor(Math.random() * responses.length)];

      bot.reply(message, response);
    }
  );
  controller.hears("-8ball", ["mention", "ambient"], (bot, message) => {
    const responses = [
      "Eso es cierto",
      "Esta decidido",
      "Sin ninguna duda",
      "Definitivamente",
      "Puedes confiar en ello",
      "Como yo lo veo, no",
      "Como yo lo veo, si",
      "Si",
      "Lo mas probable",
      "Se ve bien",
      "No",
      "Todo apunta a que si",
      "Nunca",
      "Debes estar bromeando",
      "Ferghus te romperia una espada en la cabeza",
      "Tan probable como que Luffy es mafia!",
      "Si, lo dice el besto mafia luffy",
      "Chiave dijo que si y le creo",
      "On ta mi harina pan",
      "Los bots de lyna dijeron que no",
      "El lunes sin falta carnal",
      "No hay tortilla",
      "-se queda afk-",
      "Logro desbloqueado: me vale milletians esta pregunta.",
      "Oni-chan, yamete kudasai",
      "Preguntale a tu madre",
      "Busca dentro de la cueva oscura con luz",
      "Mejor afuera que adentro suegrita",
      "Es igual de puerca que tu",
      "Esa cosa ni sentimientos tiene",
      "Pregunta despues, mamawebo",
      "Eso es ilegalisimo"
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    bot.reply(message, responses[randomIndex]);
  });
  controller.hears("-stream", ["mention", "ambient"], (bot, message) => {
    let response =
      "Sigue a la guild y sus eventos en nuestro Twitch: https://www.twitch.tv/kimnynx";
    bot.reply(message, response);
  });
  controller.hears("-crash", ["mention", "ambient"], (bot, message) => {
    let response =
      "https://cdn.discordapp.com/attachments/623720804051320873/747573523920191609/crash.jpg";
    bot.reply(message, response);
  });
  controller.hears("-mevale", ["mention", "ambient"], (bot, message) => {
    let response =
      "https://media1.tenor.com/images/6d4f711f6097e562a75da8a563ce8991/tenor.gif";
    bot.reply(message, response);
  });

  controller.hears("-heiziel", ["mention", "ambient"], (bot, message) => {
    let response =
      "https://cdn.discordapp.com/attachments/549088277056192513/676995559927840768/unknown.png";
    bot.reply(message, response);
  });
  controller.hears("-evento", ["mention", "ambient"], (bot, message) => {
    let response = "No hay evento en este momento";
    bot.reply(message, response);
  });
  controller.hears("-lyna", ["mention", "ambient"], (bot, message) => {
    let response = "Lyna esta en directo https://www.twitch.tv/lynari_nya";
    bot.reply(message, response);
  });
  //comando base para guardar en el futuro
  controller.hears("-prueba", ["mention", "ambient"], (bot, message) => {
    const responses = ["esto es un comando de prueba"];

    const randomIndex = Math.floor(Math.random() * responses.length);
    bot.reply(message, responses[randomIndex]);
  }); //termina prueba

  controller.hears(
    "-f",
    ["mention", "ambient"],
    (bot, message) => {
      if (!message.user.bot) {
        let response = "Has dado tus respetos";
        try {
          let saymsg = message.text
            .split("<@!740693628460072991>").join("")
            .split("<@740693628460072991>").join("")
            .split("-f").join("");

          if (!(!saymsg || 0 === saymsg.length)) {
            let responseText = response
              .concat(" por **")
              .concat(saymsg.trim())
              .concat("**");
            bot.reply(message, responseText);
          } else {
            bot.reply(message, response);
          }
        } catch (e) {
          bot.reply(message, e.message);
          bot.reply(message, response);
        }
        //bot.reply(message, response);
      }
    }
  );

  controller.hears("-chucho", ["mention", "ambient"], (bot, message) => {
    let response = "Ella no te ama";
    bot.reply(message, response);
  });
  controller.hears("-alapat", ["mention", "ambient"], (bot, message) => {
    let response =
      "https://cdn.discordapp.com/attachments/623720804051320873/749137749008842822/unknown.png";
    bot.reply(message, response);
  });

  controller.hears("-pickle", ["mention", "ambient"], (bot, message) => {
    try {
      var userID;
      var userName;
      let recipient = message.mentions.users
        .filter(user => user.bot === false)
        .last();
      if (recipient) {
        userName = recipient.username;
        userID = recipient.id;
      } else {
        userName = message.user.username;
        userID = message.user.id;
      }
      var seedrandom = require("seedrandom");
      let randomnize = seedrandom(userID);
      let randomNumber = randomnize() * 50;
      let pickleSize = randomNumber / 1.17;
      //bot.reply(message, randomNumber.toString());
      let response =
        "**" +
        userName +
        "**, el tamaño de tu pickle es **" +
        pickleSize.toFixed(2).toString() +
        "cm** \uD83C\uDF80";
      bot.reply(message, response);
    } catch (e) {}
  });
  controller.hears("-alagafas", ["mention", "ambient"], (bot, message) => {
    let response =
      "https://cdn.discordapp.com/avatars/173670867492929536/3fe665686920bd87b1f9b834f1c0a23c.png?size=1024";
    bot.reply(message, response);
  });
  controller.hears("-alaslap", ["mention", "ambient"], (bot, message) => {
    let response =
      "https://cdn.discordapp.com/attachments/623720804051320873/749136900761321492/unknown.png";
    bot.reply(message, response);
  });
  
    controller.hears("vinuesia es real", ["mention", "ambient"], (bot, message) => {
    let response =
      "vinuesia no es real alv";
    bot.reply(message, response);
  });
}; //final oficial del codigo
