// import { initializeApp } from "firebase/app";
// import type { FirebaseApp } from "firebase/app";
// import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
// import {
//   Messaging,
//   getMessaging,
//   getToken,
//   onMessage,
// } from "firebase/messaging";
import type { TEventsLogsCommon } from "@tx/util-models";

// let app: FirebaseApp | undefined = undefined;
// let messaging: Messaging | undefined = undefined;
// let analytics: Analytics | undefined = undefined;

// interface IFirebaseConfig {
//   apiKey: string;
//   authDomain: string;
//   projectId: string;
//   storageBucket: string;
//   messagingSenderId: string;
//   appId: string;
//   measurementId: string;
// }

// export function initFirebase(config: IFirebaseConfig) {
/** deprecated */
export function initFirebase(config: any) {
  // app = initializeApp(config);
}

// export function initMessaging() {
//   if (typeof app != "undefined") messaging = getMessaging(app);
// }

// export function initAnalytics() {
//   if (typeof app != "undefined") analytics = getAnalytics(app);
// }

export function eventLogger(event: TEventsLogsCommon) {
  // if (typeof analytics !== "undefined") logEvent(analytics, event);
}

// // MESSAGING
// // Get registration token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// export const getMessagingToken = (
//   setTokenFound: (value: boolean) => void,
//   vapidKey: string,
// ) => {
//   if (typeof messaging !== "undefined") {
//     return getToken(messaging, { vapidKey: vapidKey })
//       .then((currentToken) => {
//         if (currentToken) {
//           // console.log("current token for client: ", currentToken);
//           setTokenFound(true);
//           // Track the token -> client mapping, by sending to backend server
//           // show on the UI that permission is secured
//         } else {
//           // console.log(
//           //   "No registration token available. Request permission to generate one.",
//           // );
//           setTokenFound(false);
//           // shows on the UI that permission is required
//         }
//       })
//       .catch((err) => {
//         // console.log("An error occurred while retrieving token. ", err);
//         // catch error while creating client token
//       });
//   }
// };

export {}