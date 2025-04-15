/*CMD
  command: /pending
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

// /pending

let adminID = 1123135015;  // 🔁 Replace with your admin ID
if (user.telegramid !== adminID) {
  return Bot.sendMessage("⛔ You are not authorized to use this command.");
}

let pending = Bot.getProperty("pendingWithdrawals", []);
if (!pending || pending.length === 0) {
  return Bot.sendMessage("📭 No pending withdrawals.");
}

let msg = "<b>🕒 Pending Withdrawal Requests:</b>\n\n";
pending.forEach(function(req, index) {
  msg += 
    `🔢 <b>#${index + 1}</b>\n` +
    `👤 <b>Name:</b> ${req.name} (@${req.username})\n` +
    `🆔 <b>ID:</b> <code>${req.id}</code>\n` +
    `💳 <b>UPI:</b> ${req.wallet}\n` +
    `💰 <b>Amount:</b> 100 YEY (₹10)\n` +
    `📅 <b>Time:</b> ${req.time}\n\n`;
});

Bot.sendMessage(msg, { parse_mode: "html" });

