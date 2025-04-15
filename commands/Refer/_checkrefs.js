/*CMD
  command: /checkrefs
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Refer

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// /checkrefs

let count = Bot.getProperty("referralCount_" + user.telegramid) || 0;
Bot.sendMessage("You have " + count + " of 15" + " referral(s).\n\nBot have Total 5 Links you can unlock 1 link per 3 refers.");
