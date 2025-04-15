/*CMD
  command: /MinWith
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdraw
  answer:  ✏️ Input Minimum YEY Coin to Withdraw

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  Bot.setProperty("MinW", message, "string");
  Bot.sendMessage("✅ Minimum withdrawal amount set to: " + message + " YEY");
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

