/*CMD
  command: /withdraw
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

// /withdraw

var yey = Libs.ResourcesLib.userRes("yey");
var wallet = User.getProperty("wallet");
var MinW = Bot.getProperty("MinW"); // Should be number
var AdminID = Bot.getProperty("AdminID"); // Admin Telegram ID

// ✅ Ensure yey resource is a number (fix for corrupted resource)
if (typeof yey.value() !== "number") {
  yey.set(0); // Reset if corrupted
}

// ✅ Check if wallet is set
if (!wallet) {
  return Bot.sendMessage("🚫 You haven't set your UPI ID yet.\nUse /setwallet to add your wallet.");
}

// ✅ Check if MinW is valid
if (!MinW || isNaN(MinW * 1)) {
  return Bot.sendMessage("⚠️ Minimum withdrawal amount is not set properly by admin.");
}
MinW = parseFloat(MinW); // Ensure it's a number

// ✅ Check balance
if (yey.value() < MinW) {
  return Bot.sendMessage(
    "⛔ You need at least " + MinW + " YEY Coins to withdraw.\n\n" +
    "💰 Your Balance: *" + yey.value().toFixed(0) + "* YEY\n" +
    "🧾 Required: *" + MinW + "* YEY = ₹10",
    { parse_mode: "Markdown" }
  );
}

// ✅ Deduct coins
yey.remove(MinW);

// ✅ Store withdrawal
let pending = Bot.getProperty("pendingWithdrawals");
if (!pending) {
  pending = [];
}

let withdrawalID = "WD" + new Date().getTime();

pending.push({
  id: user.telegramid,
  wid: withdrawalID,
  name: user.first_name,
  username: user.username || "N/A",
  wallet: wallet,
  amount: MinW,
  time: new Date().toLocaleString()
});
Bot.setProperty("pendingWithdrawals", pending, "json");

// ✅ Inform user
Bot.sendMessage(
  "✅ Withdrawal request sent!\n\n" +
  "💸 Amount: *" + MinW + " YEY* (₹10)\n" +
  "💳 UPI ID: `" + wallet + "`\n" +
  "🆔 Request ID: `" + withdrawalID + "`\n\n" +
  "⏳ Please wait while admin reviews your request.",
  { parse_mode: "Markdown" }
);

// ✅ Notify admin by Telegram ID
Api.sendMessage({
  chat_id: AdminID,
  text:
    "📤 <b>New Withdrawal Request</b>\n\n" +
    "👤 <b>Name:</b> " + user.first_name +
    "\n🆔 <b>ID:</b> <code>" + user.telegramid + "</code>" +
    "\n💰 <b>Amount:</b> " + MinW + " YEY = ₹10" +
    "\n💳 <b>Wallet:</b> " + wallet +
    "\n🔖 <b>Request ID:</b> <code>" + withdrawalID + "</code>" +
    "\n⏱ <b>Time:</b> " + new Date().toLocaleString(),
  parse_mode: "html"
});

