/*CMD
  command: /reply_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Contact/Report
  answer: Solve the User's Query : 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage("Sent!!")
Api.copyMessage({
chat_id: User.getProperty("ad"),
from_chat_id: user.telegramid,
message_id: request.message_id
})

