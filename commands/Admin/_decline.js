/*CMD
  command: /decline
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

// /decline <user_id>
let input = message;
if (!input) {
  return Bot.sendMessage("❗ Usage: /decline <user_id>");
}

let userId = parseInt(input);
let requests = Bot.getProperty("pendingWithdrawals", []);

let index = requests.findIndex(r => r.userId == userId);
if (index === -1) {
  return Bot.sendMessage("❌ No pending request found for User ID: " + userId);
}

let request = requests[index];

// Remove request from list
requests.splice(index, 1);
Bot.setProperty("pendingWithdrawals", requests, "json");

// Refund 100 YEY
let yey = Libs.ResourcesLib.anotherUserRes("yey", userId);
yey.add(100);

// Notify user
Bot.sendMessageToChatWithId(userId,
  "❌ Your withdrawal of 100 YEY (₹10) was declined.\n\n" +
  "💸 100 YEY Coins have been refunded to your wallet.\nIf you find any problem you cna contact admin using /contact."
);

// Notify admin
Bot.sendMessage("✅ Declined withdrawal for user ID: " + userId);

