/*CMD
  command: /report
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Contact/Report
  answer: How can we help you?

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.copyMessage({
  chat_id: 1123135015,
  from_chat_id: user.telegramid,
  message_id: request.message_id,
  reply_markup: {
    inline_keyboard: [
      [{ text: "↩️ Reply Him/Her", callback_data: "/reply " + user.telegramid }]
    ]
  }
})
Bot.sendMessage("⚠* The Report has been sent to the admin*")

