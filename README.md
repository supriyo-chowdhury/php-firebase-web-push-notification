# 🚀 Firebase Web Push Notification using PHP & MySQL

This project demonstrates how to implement **Web Push Notifications using Firebase Cloud Messaging (FCM)** with a **PHP backend and MySQL database**.

---

## ✨ Features

* 🔔 Push notifications (Web)
* 🖼️ Image/banner notification
* 📱 PWA-ready structure
* 💾 Store user tokens in MySQL
* 🚫 Duplicate token prevention
* ⚡ Send notification to all users

---

## 🛠️ Requirements

* PHP 7.4+
* MySQL
* Composer
* HTTPS (Required for push notifications)

---

## 📦 Installation

### 1. Clone Repository

```
git clone https://github.com/supriyo-chowdhury/php-firebase-web-push-notification.git
```

---

### 2. Install Dependencies

```
composer require kreait/firebase-php
```

---

### 3. Setup Firebase

1. Go to Firebase Console
2. Create project
3. Add Web App
4. Get:

   * Firebase Config
   * VAPID Key
   * Service Account JSON

---

### 4. Configure Project

* Update `push.js`
* Update `firebase-messaging-sw.js`
* Rename `config.example.php` → `config.php`

---

### 5. Create Database Table

```sql
CREATE TABLE push_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 6. Run Project

Open your website and allow notifications.

---

### 7. Send Notification

```
send_notification.php
```

---

## 📁 Project Structure

```
firebase-web-push-php/
│
├── push.js                     # Handles Firebase initialization & token generation
├── firebase-messaging-sw.js    # Service Worker for background notifications
├── save_token.php              # Saves user device token into MySQL
├── send_notification.php       # Sends push notification to all users
├── config.php                  # Database connection file (not included in repo)
├── config.example.php          # Example DB config file
├── manifest.json               # (Optional) PWA configuration
├── composer.json               # PHP dependencies
├── vendor/                     # Folder is generated via Composer
│
└── firebase/
    └── service-account.json    # Firebase private key (not uploaded)
```

---

### 📌 Notes

* `vendor/` folder is generated via Composer
* `config.php` should be created from `config.example.php`
* `firebase-messaging-sw.js` must be placed in the **root directory**

---

### ⚙️ Key Files Explained

| File                       | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| `push.js`                  | Requests notification permission & sends token to server |
| `firebase-messaging-sw.js` | Displays notifications in background                     |
| `save_token.php`           | Stores unique tokens in database                         |
| `send_notification.php`    | Sends notification to all saved users                    |
| `config.php`               | MySQL database connection                                |
| `manifest.json`            | Enables PWA features                                     |


---

## 💡 Use Cases

* E-commerce alerts
* Trading signals
* Logistics updates
* Admin broadcast system

---

## 📜 License

MIT License
