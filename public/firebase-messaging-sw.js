// if( 'undefined' === typeof window){
//   importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
//   importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');
// }
if( 'undefined' === typeof window){
  importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
  importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
}

const firebaseConfig = {
  apiKey: "AIzaSyBWXAC4n3lsM_7tUDFlqmDraV0hQv6qHE4",
  authDomain: "withpt-395910.firebaseapp.com",
  projectId: "withpt-395910",
  storageBucket: "withpt-395910.appspot.com",
  messagingSenderId: "786993775110",
  appId: "1:786993775110:web:73ecc83d2f858481317987"
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(messaging, (payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload?.notification.title;
  const notificationOptions = {
    body: payload?.notification.body,
    icon: './logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// self.addEventListener("push", function (event) {
//   if (event.data) {
//     // 알림 메세지일 경우엔 event.data.json().notification;
//     const data = event.data.json().data;
//     const options = {
//       body: data.body,
//       icon: data.image,
//       image: data.image,
//       data: {
//         click_action: data.click_action, // 이 필드는 밑의 클릭 이벤트 처리에 사용됨
//       },
//     };
    
//     event.waitUntil(
//       self.registration.showNotification(data.title, options)
//     );
//   } else {
//     console.log("This push event has no data.");
//   }
// });

// self.addEventListener('install', function (e) {
//   console.log('fcm sw install..');
//   self.skipWaiting();
// });

// self.addEventListener('activate', function (e) {
//   console.log('fcm sw activate..');
// });

// self.addEventListener('push', function (e) {
//   console.log(e.data.json());

//   const resultData = JSON.parse(e.data.json().data.notification);
//   const notificationTitle = resultData.title;
//   const notificationOptions = {
//     body: resultData.body,
//     icon: resultData.icon,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// self.addEventListener('notificationclick', function (event) {
//   const url = '/';
//   event.notification.close();
//   event.waitUntil(clients.openWindow(url));
// });