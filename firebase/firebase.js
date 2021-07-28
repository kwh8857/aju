import firebaseApp from "firebase/app";
import "firebase/performance";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB7m4H1jBYnMDERovliN6Kg2tLtCkgPBMg",
  authDomain: "steadee-pf.firebaseapp.com",
  databaseURL: "https://steadee-pf-default-rtdb.firebaseio.com",
  projectId: "steadee-pf",
  storageBucket: "steadee-pf.appspot.com",
  messagingSenderId: "252193488049",
  appId: "1:252193488049:web:82334bcd7c6ab226ba3690",
  measurementId: "G-N7KJ58701D",
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
