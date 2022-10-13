/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
  apiKey: "AIzaSyChPrGm8th7_av0juR569Y7UHfRpkOtedI",
  authDomain: "friendlychat-5bf2e.firebaseapp.com",
  projectId: "friendlychat-5bf2e",
  storageBucket: "friendlychat-5bf2e.appspot.com",
  messagingSenderId: "812040357461",
  appId: "1:812040357461:web:ba4b67b847f55d9efef6dc"
};

const config = {
  apiKey: "AIzaSyChPrGm8th7_av0juR569Y7UHfRpkOtedI",
  authDomain: "friendlychat-5bf2e.firebaseapp.com",
  projectId: "friendlychat-5bf2e",
  storageBucket: "friendlychat-5bf2e.appspot.com",
  messagingSenderId: "812040357461",
  appId: "1:812040357461:web:ba4b67b847f55d9efef6dc"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}