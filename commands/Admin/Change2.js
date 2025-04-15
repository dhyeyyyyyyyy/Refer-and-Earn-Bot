/*CMD
  command: Change2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: Enter the amount of YEY to add

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
  var targetID = User.getProperty("TgidB");
  var yey = Libs.ResourcesLib.anotherUserRes("yey", targetID);
  yey.add(+message);
  Bot.sendMessage("✅ Added " + message + " YEY to `" + targetID + "`.");
  Bot.sendMessageToChatWithId(targetID, "💸 Admin has added " + message + " YEY Coins to your account.");
} else {
  Bot.sendMessage("⛔ You are not an admin.");
}

