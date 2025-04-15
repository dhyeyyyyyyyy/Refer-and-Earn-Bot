/*CMD
  command: /menu
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

// /menu

let refLink = "https://t.me/" + bot.name + "?start=" + user.telegramid;
let shareLink = "https://t.me/share/url?url=" + encodeURIComponent(refLink) + "&text=" + encodeURIComponent("Check this cool non-monetary refer and earn bot");

let keyboard = [
  [{ title: "Share My Referral Link", url: shareLink }],
  [{ title: "Check My Referrals", command: "/checkrefs" }],
  [{ title: "Get My Video", command: "/getvideo" }]
];

Bot.sendInlineKeyboard(keyboard, "Invite friends using your referral link to unlock the video.");
