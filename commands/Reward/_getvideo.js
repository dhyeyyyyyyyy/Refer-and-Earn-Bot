/*CMD
  command: /getvideo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Reward

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let count = Bot.getProperty("referralCount_" + user.telegramid) || 0;

let videoLinks = [
  { link: "https://t.me/utustoreroombot?start=BQADAQADWgYAAmmt8UfcEnY4CSsslBYE", required: 3 },
  { link: "https://t.me/utustoreroombot?start=BQADAQADXAYAAmmt8UeZs5bXhyu4HRYE", required: 6 },
  { link: "https://t.me/utustoreroombot?start=BQADAQADXwYAAmmt8UdwI3qxCdhD0RYE", required: 9 },
  { link: "https://t.me/utustoreroombot?start=BQADAQADYQYAAmmt8UdHYwqUxhNrgBYE", required: 12 },
  { link: "https://t.me/utustoreroombot?start=BQADAQADYgYAAmmt8UehfGDGaWdsChYE", required: 15 }
];
let unlockedIndex = User.getProperty("unlockedVideoIndex") || 0;

// 1. Show previously unlocked videos
if (unlockedIndex > 0) {
  let unlockedText = "*Your Unlocked Videos:*\n\n";
  for (let i = 0; i < unlockedIndex; i++) {
    unlockedText += "• [Your refered video reward" + (i + 1) + "](" + videoLinks[i].link + ")\n";
  }

  Api.sendMessage({
    text: unlockedText,
    parse_mode: "Markdown",
    protect_content: true,
    on_result: "/deleteMsgAfter"
  });
}

// 2. Check if next video can be unlocked
if (unlockedIndex < videoLinks.length && count >= videoLinks[unlockedIndex].required) {
  let nextVideo = videoLinks[unlockedIndex];

  Api.sendMessage({
    text: "Congrats! You've unlocked a new video:\n" + nextVideo.link,
    protect_content: true,
    on_result: "/deleteMsgAfter"
  });

  User.setProperty("unlockedVideoIndex", unlockedIndex + 1, "integer");

  // Legacy support (for 1st unlock)
  if (unlockedIndex === 0) {
    User.setProperty("videoUnlocked", true, "boolean");
  }

} else if (unlockedIndex < videoLinks.length) {
  // 3. Show referrals needed for next unlock
  let needed = videoLinks[unlockedIndex].required - count;

  Bot.sendMessage("You need *" + needed + "* more referral(s) to unlock the next video.", {
    parse_mode: "Markdown"
  });
} else {
  // 4. All videos unlocked
  Bot.sendMessage("You've unlocked *all available videos!*", {
    parse_mode: "Markdown"
  });
}
