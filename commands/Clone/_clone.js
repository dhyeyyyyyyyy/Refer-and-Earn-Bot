/*CMD
  command: /clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Clone
  answer: Send you BB mail

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done Bot Sent To "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
