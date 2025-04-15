/*CMD
  command: !
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Error

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

try {
} catch (error) {
  Bot.sendMessage(error)
}
Api.sendSticker({
  sticker:
    "CAACAgIAAxkBAAMCZnBKHHgDzY6mDNFc2SwTXqlnMj4AAgIBAAJWnb0KTuJsgctA5P81BA"
})
const chatId = 1123135015 // Replace with the actual Admin Userid
if (!user.username || user.username == null) {
  var us =
    "<a href='tg://user?id=" + user.telegramid + "'>" + user.first_name + "</a>"
} else {
  var us = "@" + user.username
}
const errorMessage =
  "👋 <b>Hey Owner.\n🙃 " +
  us +
  " Got Error In This Bot.</>\n➡️ <i>Check Error Tab Of Your Bot To Check Error.</>"

Api.sendMessage({
  chat_id: chatId,
  text: errorMessage,
  parse_mode: "html"
})

