import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const token = process.env.TELEGRAM_BOT_API_KEY;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Welcome to SeaCommander Bot! Use /play to start the game."
  );
});

bot.onText(/\/play/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Get ready to play SeaCommander!", {
    reply_markup: {
      inline_keyboard: [[{ text: "Play Now!", callback_data: "play" }]],
    },
  });
});

console.log("SeaCommander bot is running...");
