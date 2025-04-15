/*CMD
  command: /AddAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Send user Telegram ID to promote

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1123135015) {
  Bot.setProperty("admin" + message, message, "string");
  Bot.sendMessageToChatWithId(message, "🎉 You’ve been promoted to Admin!");
  Bot.sendMessage("✅ `" + message + "` is now an admin.", { parse_mode: "Markdown" });
} else {
  Bot.sendMessage("⛔ Only the owner can promote admins.");
}

