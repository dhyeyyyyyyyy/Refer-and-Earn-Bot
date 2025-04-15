/*CMD
  command: /approve
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

// /approve <user_id>
let input = message;
if (!input) {
  return Bot.sendMessage("❗ Usage: /approve <user_id>");
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

// Notify user
Bot.sendMessageToChatWithId(userId,
  "✅ Your withdrawal of 100 YEY (₹10) has been approved!\n\n" +
  "💳 Sent to UPI: " + request.wallet
);

// Notify admin
Bot.sendMessage("🎉 Approved withdrawal for user ID: " + userId);

