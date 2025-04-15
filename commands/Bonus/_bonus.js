/*CMD
  command: /bonus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Bonus

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// /bonus

function canClaimBonus() {
  let last = User.getProperty("bonus_last_time");
  if (!last) return true;

  let minutesPassed = (Date.now() - last) / 1000 / 60;
  let minutesIn24Hrs = 24 * 60;

  if (minutesPassed < minutesIn24Hrs) {
    let remaining = minutesIn24Hrs - minutesPassed;
    let h = Math.floor(remaining / 60);
    let m = Math.floor(remaining % 60);
    let s = Math.floor((remaining % 1) * 60);

    Bot.sendMessage(
      "*📛 Bonus Already Claimed!*\n\n" +
      "▶️ Come back in ⏳ " + h + "h " + m + "m " + s + "s to claim again.",
      { parse_mode: "Markdown" }
    );
    return false;
  }

  return true;
}

// ❌ If bonus already claimed, stop
if (!canClaimBonus()) return;

// ✅ Set claim time
User.setProperty("bonus_last_time", Date.now(), "integer");

// ✅ Get bonus amount from admin setting
let bonusAmount = parseFloat(Bot.getProperty("Bonus"));
if (!bonusAmount || isNaN(bonusAmount)) {
  bonusAmount = 10; // fallback value
}

// ✅ Add bonus to user balance
let yey = Libs.ResourcesLib.userRes("yey");
yey.add(bonusAmount);

// ✅ Inform user
Bot.sendMessage(
  "🎉 *Bonus Claimed!*\n\n" +
  "You've received *" + bonusAmount + "* YEY Coin(s) today.\n" +
  "💰 Current Balance: *" + yey.value().toFixed(0) + "* YEY",
  { parse_mode: "Markdown" }
);

