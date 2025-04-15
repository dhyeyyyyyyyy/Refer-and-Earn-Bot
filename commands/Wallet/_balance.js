/*CMD
  command: /balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wallet

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// /balance

var RBan = Bot.getProperty("Ban" + user.telegramid);
if (RBan == "Ban") {
  return Bot.sendMessage("⛔ You are banned.");
}

var yey = Libs.ResourcesLib.userRes("yey");
var yeyCoins = yey.value().toFixed(0);

// Date formatting
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var now = new Date();
var formattedDate = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

Api.sendMessage({
  text:
    `<b>👤 Name :</b> ${user.first_name}` +
    `\n<b>🆔 User ID :</b> <code>${user.telegramid}</code>` +
    `\n\n<b>🪙 YEY Coin Balance :</b> <code>${yeyCoins} YEY</code>` +
    `\n\n🗓️ Today is ${formattedDate}`,
  reply_markup: {
    inline_keyboard: [
      [
        { text: `💳 Withdraw ${yeyCoins} YEY`, callback_data: "✅ Withdraw Balance" }
      ]
    ]
  },
  parse_mode: "html"
});

