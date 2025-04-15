/*CMD
  command: /stats
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Statistics

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var userRes = Libs.ResourcesLib.anotherChatRes("user", "global");
var lengthRes = Libs.ResourcesLib.anotherChatRes("length", "global");
var myRequestRes = Libs.ResourcesLib.userRes("Request");

var fullBotUsers = Bot.getProperty("wholeUsers", []);
var key = "1123135015";

if (user.telegramid == key) {
  Bot.sendMessage(
    "*📊 Bot Live Stats *\n\n" +
    "→ Total Requests: " + userRes.value() + "\n" +
    "→ Your Requests: " + myRequestRes.value() + "\n" +
    "→ Total Users: " + fullBotUsers.length + "\n" +
    "→ Request Limit: Unlimited\n" +
    "→ Message Length: " + lengthRes.value() + "\n\n" +
    "*★ BOT Powered by* [Dhyey Stores](https://t.me/dhyeygotyou)",
    { disable_web_page_preview: true, is_reply: true }
  );
} else {
  Bot.sendMessage("⛔ You are not authorized to view stats.");
}
