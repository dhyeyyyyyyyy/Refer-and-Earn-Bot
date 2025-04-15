/*CMD
  command: /broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "1123135015";
if (user.telegramid == key) {
    // Check if the bot received a reply message
    if (request.reply_to_message) {
        var fullBotUsers = Bot.getProperty("wholeUsers");
        var replyMessage = request.reply_to_message.text || request.reply_to_message.caption || "Media message";

        for (var index in fullBotUsers) {
            var info = fullBotUsers[index];
            Api.sendMessage({
                chat_id: info,
                text: replyMessage,
                parse_mode: "Markdown"
            });
        }

        Bot.sendMessage("✅ Message Sent Instantly 【" + fullBotUsers.length + "】");
    } else {
        Bot.sendMessage("Please reply to a message, media, or text to broadcast.");
    }
} else {
    Bot.sendMessage("Ooops");
}
