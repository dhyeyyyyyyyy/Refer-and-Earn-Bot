/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer:  Enter Telegram ID to unban

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  Bot.setProperty("Ban" + message, "UnBan", "string");
  Bot.sendMessageToChatWithId(message, "✅ You have been unbanned by the admin.");
  Bot.sendMessage("✅ User `" + message + "` has been unbanned.", { parse_mode: "Markdown" });
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

