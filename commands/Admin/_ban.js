/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Enter the user's Telegram ID to ban

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  Bot.setProperty("Ban" + message, "Ban", "string");
  Bot.sendMessageToChatWithId(message, "🚫 You have been banned by the admin.");
  Bot.sendMessage("✅ User `" + message + "` has been banned.", { parse_mode: "Markdown" });
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

