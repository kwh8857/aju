import firebaseApp from "firebase/app";
import "firebase/performance";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1fsk0l0ksJl9lDpHY0XLnL3MCHXQLRlE",
  authDomain: "ajoo-office.firebaseapp.com",
  projectId: "ajoo-office",
  storageBucket: "ajoo-office.appspot.com",
  messagingSenderId: "547492296181",
  appId: "1:547492296181:web:594f4009a3a17822e59cbc",
  measurementId: "G-73MKY5EZRK",
};

// Initialize Firebase
export default function initFirebase() {
  if (!firebaseApp.apps.length) {
    firebaseApp.initializeApp(firebaseConfig);
    // firebaseApp.analytics();
    // firebaseApp.performance();
    console.log("firebase init");
  } else {
    console.log("firebase not init ");
  }
}
