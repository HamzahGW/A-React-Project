// import { Messaging } from "firebase/messaging";

// let messaging: Messaging | undefined = undefined;

// if(typeof messaging !== 'undefined'){

//     getToken(messaging, { vapidKey: 'BGOucTsF6KghB8d1R8Ihf2BxTsEkufLSrTyTD0M2ydxpMuHCTXUfO4EVLjW8GabDlTKi_-IU4647xTLR86zD9kA' }).then((currentToken) => {
//     if (currentToken) {
//         // console.log(currentToken);
//         // Send the token to your server and update the UI if necessary
//         // ...
//     } else {
//         // Show permission request UI
//         // console.log('No registration token available. Request permission to generate one.');
//         // ...
//     }
//     }).catch((err) => {
//     // console.log('An error occurred while retrieving token. ', err);
//     // ...
//     });

// }

// export function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//     }
//   }
//   )
// }

// // onMessage(messaging, (payload) => {
// // });

// export const getOrRegisterServiceWorker = () => {
//   if ('serviceWorker' in navigator) {
//     return window.navigator.serviceWorker
//       .getRegistration('/firebase-push-notification-scope')
//       .then((serviceWorker) => {
//         if (serviceWorker) return serviceWorker;
//         return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
//           scope: '/firebase-push-notification-scope',
//         });
//       });
//   }
//   // throw new Error('The browser doesn`t support service worker.');
// };
