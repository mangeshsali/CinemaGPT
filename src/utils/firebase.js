import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb_A4zmPORIlzFbe0JbFQ5jFKm24dJG6o",
  authDomain: "cinemagpt-f476b.firebaseapp.com",
  projectId: "cinemagpt-f476b",
  storageBucket: "cinemagpt-f476b.appspot.com",
  messagingSenderId: "351372451363",
  appId: "1:351372451363:web:df63ad6db3ee0b957d5b96",
  measurementId: "G-N6TQZX19CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
