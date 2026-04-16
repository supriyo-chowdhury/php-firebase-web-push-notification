import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    getToken(messaging, {
      vapidKey: "YOUR_VAPID_KEY"
    }).then((token) => {

      console.log("TOKEN:", token);

      fetch("/save_token.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "token=" + token
      });

    });
  }
});