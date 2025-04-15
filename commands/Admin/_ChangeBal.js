/*CMD
  command: /ChangeBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Send the user's Telegram ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  User.setProperty("TgidB", message, "string");
  Bot.runCommand("Change2");
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

