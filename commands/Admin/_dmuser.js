/*CMD
  command: /dmuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: What to say

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var tgid = options.tgid
Api.sendMessage({
chat_id: tgid,
text: "*💬 Message From Admin\n➖➖➖➖➖➖➖➖➖➖➖➖\n➡️ Admin Messsage = "+message+"*",
parse_mode: "markdown" })
Bot.sendMessage("*📞 Message Sent To User = "+tgid+"*")
