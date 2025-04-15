/*CMD
  command: /admin
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

var isAdmin = Bot.getProperty("admin" + user.telegramid);
if (user.telegramid == isAdmin) {
  let buttons = [
    [{ title: "🎙️ Broadcast", command: "/broadcast" }],
    [{ title: "⚠️ Ban", command: "/ban" }, { title: "🔓 Unban", command: "/unban" }],
    [{ title: "🕹️ Change YEY Balance", command: "/ChangeBal" }],
    [{ title: "📤 Message User", command: "/contactuser" }],
    [{ title: "🎁 Update Daily Bonus", command: "/ChangeBonus" }, { title: "📢 Update Refer Bonus", command: "/ReferBonus" }],
    [{ title: "💰 Set Min Withdraw", command: "/MinWith" }],
    [{ title: "💼 Check User Wallet", command: "/FindUserBal" }],
   // [{ title: "💡 Set Start Channel", command: "ChangeSChannel" }, { title: "💠 Payout Channel", command: "/ChangePChannel" }],
    [{ title: "➕ Add Admin", command: "/AddAdmin" }, { title: "➖ Remove Admin", command: "/RemoveAdmin" }],
    [{ title: "📤 Send Bot to Email", command: "/clone" }]
  ];
  Bot.sendInlineKeyboard(buttons, `👋 Welcome [${user.first_name}](tg://user?id=${user.telegramid})\n\n🔐 You are in Admin Panel`);
} else {
  Bot.sendMessage("⛔ You are not authorized to access the Admin Panel.");
}

