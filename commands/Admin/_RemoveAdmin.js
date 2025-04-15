/*CMD
  command: /RemoveAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Send the Telegram ID to remove admin

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1123135015) {
  Bot.setProperty("admin" + message, "demote", "string");
  Bot.sendMessageToChatWithId(message, "🔻 You’ve been removed from Admin.");
  Bot.sendMessage("✅ `" + message + "` has been demoted.", { parse_mode: "Markdown" });
} else {
  Bot.sendMessage("⛔ Only the owner can remove admins.");
}

