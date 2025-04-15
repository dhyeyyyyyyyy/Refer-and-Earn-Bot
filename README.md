# YEY Rewards Bot 🤖🎁

> A Telegram bot for Refer & Earn — built with **Bots.Business**, supporting **monetary** and **non-monetary** rewards, a powerful admin panel, and anti-abuse systems.

---

## 🚀 Features

### 🔓 Non-Monetary Rewards
- 🎬 Unlock premium content (e.g. videos, links) by referring users
- 🔐 Rewards are **non-shareable** with auto-delete protection
- 🔁 Admin can control:
  - Required referral count
  - Reward content (link)
  - Deletion time

### 💰 Monetary Rewards
- 💳 Users set their payout account via `/wallet` or `/setwallet`
- 💸 Withdraw requests via `/withdraw` (notifies admin instantly)
- 📊 Real-time balance tracking with `/balance`

### 🎁 Bonuses & Engagement
- 📅 `/bonus` - Claim daily bonus once every 24 hours
- 👥 `/checkrefs` - View personal referral count
- 🧾 `/menu` - Access referral links, rewards & balance
- 📈 `/stats` - Check total users, stats, etc.

### 🧰 Support & Error Management
- ⚠️ All bot errors are auto-forwarded to an **Error Tab**
- 🛠 `/report` - Users can report issues to the admin

---

## 👑 Admin Panel

Admins can access powerful tools:

- 👤 Ban / Unban users
- 📢 Broadcast messages to all users
- 🧾 Change user YEY balance (add/remove)
- ✉️ Contact users personally
- 🎁 Update daily bonus or referral bonus
- 💰 Set minimum withdrawal amount
- 🔎 Check any user's balance
- 🧑‍💼 Add / Remove other admins
- 🧬 Clone bot configuration
- 🏧 List to pending withdrawal request
---

## ⚙️ Tech Stack

- 🧠 [Bots.Business JavaScript (BJS)](https://help.bots.business)
- 📦 `ResourcesLib` for coin management
- 🔄 Fully synchronous logic
- 🔒 Anti-abuse cooldowns and protected links
- 📲 Admin notifications via Telegram API

---

Absolutely! Here's your updated `## 📌 How It Works` section for the `README.md`, now including **all the commands** you mentioned earlier (with proper descriptions and user/admin roles clarified):

---

## 📌 How It Works

| Command         | Description                                                   |
|-----------------|---------------------------------------------------------------|
| `/start`        | Launch the bot                                                |
| `/menu`         | Access referral link, rewards, and referral count             |
| `/bonus`        | Claim your daily bonus                                        |
| `/checkrefs`    | Check how many users you've referred                          |
| `/balance`      | View your current YEY coin balance                            |
| `/wallet`       | View your saved payout wallet                                 |
| `/setwallet`    | Set or update your payout UPI ID                              |
| `/withdraw`     | Request a withdrawal — admin is alerted automatically         |
| `/report`       | Contact the admin or report an issue                          |
| `/stats`        | View overall bot usage statistics                             |
| `/getvideo`     | [Admin] Set referral requirement and reward content link      |
| `/admin`        | [Admin] Access admin panel features                           |
| `/broadcast`    | [Admin] Send message to all users                             |

---

## 🧠 Why This Bot Can Win

- ⚡ **Highly interactive**: Both casual and premium reward options keep users engaged
- 🛡️ **Secure**: Non-shareable rewards prevent abuse
- 📈 **Scalable & Modular**: Admin can control everything without editing code
- 🤖 **Fully Telegram-native**: Fast, seamless experience
- 🔥 **Clean UX + DevX**: Users and admins both enjoy clear flows and controls

---

## 🛠 How to Setup

1. Clone the repo or copy code into [Bots.Business](https://bots.business)
2. Set required properties:
   ```js
   Bot.setProperty("AdminID", YOUR_TELEGRAM_ID, "integer");
   Bot.setProperty("Bonus", "10", "string");
   Bot.setProperty("MinW", 100, "integer");
   ```
3. Use provided commands to configure other behavior (`/getvideo`, `/setwallet`, etc.)

---

## 🤝 Contribution

This bot was built with the intention to help **new creators** launch reward-based Telegram systems without complex backend coding.  
Want to help? Fork, improve, and create a pull request!

---

## 🏆 License

MIT License — free to use, modify, and share with credit.  
Credit: [Dhyey Patel](https://t.me/dhyeye)

---

## 💬 Connect

Questions or suggestions? [Contact the creator](https://t.me/dhyeye) on Telegram.

---
