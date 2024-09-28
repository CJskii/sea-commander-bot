import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

const token = process.env.TELEGRAM_BOT_API_KEY;
const bot = new TelegramBot(token, { polling: true });

const battleshipUrl = "https://t.me/SeaCommanderBot/battleship";

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome to SeaCommander Bot! Choose an option:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Battleship", url: battleshipUrl }],
        [{ text: "Leaderboard (Coming Soon)", callback_data: "leaderboard" }],
        [{ text: "Settings (Coming Soon)", callback_data: "settings" }],
        [{ text: "Help", callback_data: "help" }],
      ],
    },
  });
});

bot.on("callback_query", (callbackQuery) => {
  const chatId = callbackQuery.message?.chat.id;
  const data = callbackQuery.data;

  if (!chatId) return;

  switch (data) {
    case "leaderboard":
      bot.sendMessage(
        chatId,
        "The leaderboard feature is still under development. Stay tuned!"
      );
      break;
    case "settings":
      bot.sendMessage(
        chatId,
        "Settings are currently being worked on. More options coming soon!"
      );
      break;
    case "help":
      bot.sendMessage(
        chatId,
        "This is SeaCommander Bot. Use the options in the menu to play games, view the leaderboard, and adjust settings. More features are on the way!"
      );
      break;
    default:
      break;
  }
});

console.log("SeaCommander bot is running...");
