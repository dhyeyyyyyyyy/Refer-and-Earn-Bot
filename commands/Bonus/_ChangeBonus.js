/*CMD
  command: /ChangeBonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Bonus
  answer: 📥 Enter the Bonus Value

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  Bot.setProperty("Bonus", message, "string");
  Bot.sendMessage("🎁 Bonus amount set to: " + message);
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

