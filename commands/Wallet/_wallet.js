/*CMD
  command: /wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Wallet

  <<ANSWER
*✏️ Send your UPI ID (e.g., user@upi) to use for future withdrawals.*

_⚠️ Make sure it's correct. This UPI will be used to send your money._

  ANSWER
  keyboard: ⛔ Cancel
  aliases: 
  group: 
CMD*/

// /wallet

User.setProperty("wallet", message, "string");
Bot.sendMessage("*✅ Wallet Set Successfully!*\n\n💡 UPI ID saved: `" + message + "`", { parse_mode: "Markdown" });

// Optional: go back to main menu or show balance
Bot.runCommand("/balance");

