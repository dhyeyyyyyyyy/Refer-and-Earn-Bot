/*CMD
  command: /contactuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: ✅ Send User Telegram Id To Send Message:


  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == admin) {
Bot.run({ 
command: "/dmuser",
options: { tgid : message }
})
}
else {
  Bot.sendMessage("⛔ You are not an admin.");
}

