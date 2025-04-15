/*CMD
  command: /setwallet
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

// /setwallet

var wallet = User.getProperty("wallet");

if (!wallet) {
  var button = [{ title: "🚧 Set Wallet 🚧", command: "/wallet" }];
  Bot.sendInlineKeyboard(button,
    "*💡 Your current UPI ID is:* `not set`\n\n" +
    "_It will be used for future withdrawals._",
    { parse_mode: "Markdown" }
  );
} else {
  var button = [{ title: "🚧 Change Wallet 🚧", command: "/wallet" }];
  Bot.sendInlineKeyboard(button,
    "*💡 Your current UPI ID is:* `" + wallet + "`\n\n" +
    "_This wallet will be used for all future withdrawals._",
    { parse_mode: "Markdown" }
  );
}

