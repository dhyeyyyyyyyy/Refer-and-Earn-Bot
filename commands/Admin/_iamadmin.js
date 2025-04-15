/*CMD
  command: /iamadmin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.setProperty("admin" + user.telegramid, user.telegramid, "string");
Bot.sendMessage("✅ You are now set as admin!");

