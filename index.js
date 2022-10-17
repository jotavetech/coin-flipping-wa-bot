const { Client, MessageMedia } = require("whatsapp-web.js");
const client = new Client();

const cara = MessageMedia.fromFilePath("./assets/cara.jpeg");
const coroa = MessageMedia.fromFilePath("./assets/coroa.jpeg");

const qrcode = require("qrcode-terminal");

const random = () => (Math.random() < 0.5 ? 1 : 0);

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("client is ready to use");
});

client.on("message", (message) => {
  const msg = message.body.toLowerCase();

  if (msg === "coroa") {
    const result = random();
    if (result === 1) {
      message.reply(coroa);
      message.reply("caiu COROA, você ganhou!");
    } else {
      message.reply(cara);
      message.reply("caiu CARA, você perdeu!");
    }
  }
  if (msg === "cara") {
    const result = random();
    if (result === 1) {
      message.reply(cara);
      message.reply("caiu CARA, você ganhou!");
    } else {
      message.reply(coroa);
      message.reply("caiu COROA, você perdeu!");
    }
  }
});

client.initialize();
