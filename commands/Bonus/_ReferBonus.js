/*CMD
  command: /ReferBonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Bonus
  answer: Input referral reward in YEY coins

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  Bot.setProperty("RefBonus", message, "string");
  Bot.sendMessage("✅ Referral bonus set to: " + message + " YEY Coin(s)");
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

