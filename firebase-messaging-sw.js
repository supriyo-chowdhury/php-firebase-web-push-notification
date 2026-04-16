importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: payload.data.icon,
    image: payload.data.image,
    badge: payload.data.icon,
    tag: payload.data.tag,
    data: {
        url: payload.data.url
    }
});

});

self.addEventListener('notificationclick', function(event) {
event.notification.close();

event.waitUntil(
clients.openWindow(event.notification.data.url)
);

});