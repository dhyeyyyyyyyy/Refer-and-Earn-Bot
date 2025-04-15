/*CMD
  command: /FindUserBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Enter the user's Telegram ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  var yey = Libs.ResourcesLib.anotherUserRes("yey", message);
  Bot.sendMessage("🔎 YEY Balance of User `" + message + "`: *" + yey.value() + "*", { parse_mode: "Markdown" });
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

