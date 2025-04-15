/*CMD
  command: /reply
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Contact/Report

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("ad", params, "string")
Bot.runCommand("/reply_2")

