/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Main

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// /start

// 🔒 Ban Check
var isBanned = Bot.getProperty("Ban" + user.telegramid);
if (isBanned == "Ban") {
  return Bot.sendMessage("⛔ You are banned from using this bot.");
}

// 📣 Start Channel Subscription Check (Optional, toggle if needed)
var startChannel = Bot.getProperty("Ch1");
// if (startChannel) {
//   // You can implement subscription check here (optional)
// }

// 🆕 Add User to Full Users List
var fullBotUsers = Bot.getProperty("wholeUsers", []);
var already = User.getProperty("already");

if (!already) {
  User.setProperty("already", "DONE", "string");
  fullBotUsers.push(user.telegramid);
  Bot.setProperty("wholeUsers", fullBotUsers, "json");

  // 🔔 Notify Admin
  Bot.sendMessageToChatWithId(
    1123135015,
    "🌎 New SoS User\n╰┈➤ Name: " +
    user.first_name +
    "\n╰┈➤ ID: " +
    user.telegramid +
    "\n╰┈➤ Username: @" +
    user.username
  );
}

// 💌 Referral System
if (params) {
  let refID = parseInt(params);

  if (refID && refID !== user.telegramid) {
    let uniqueKey = "ref_" + refID + "_" + user.telegramid;

    if (!Bot.getProperty(uniqueKey)) {
      let countKey = "referralCount_" + refID;
      let currentCount = Bot.getProperty(countKey) || 0;
      let bonus = parseInt(Bot.getProperty("RefBonus")) || 1;  // 🪙 Dynamic reward

      Bot.setProperty(countKey, currentCount + 1, "integer");
      Bot.setProperty(uniqueKey, true, "boolean");

      // 💰 Add YEY Coin
      let refBal = Libs.ResourcesLib.anotherUserRes("yey", refID);
      refBal.add(bonus);

      // 🔔 Notify Referrer
      Bot.sendMessageToChatWithId(refID,
        "🎉 You got a new referral!\n🪙 +"+ bonus +" YEY Coin(s)\n\nTotal referrals: " + (currentCount + 1)
      );
    }
  }
}

// 🎓 Final User Message
Bot.sendMessage("📚 *Welcome to SoS Academy!*\n\n" +
"Unlock exclusive course content using your referral power.\n\nUse /menu to get your referral link and start earning rewards.",
{ parse_mode: "Markdown" });

