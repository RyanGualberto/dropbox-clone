// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpDJaCq0xL9S6Ramjm-xXMz13Qg6r8cNo",
  authDomain: "dropbox-clone-ryan.firebaseapp.com",
  databaseURL: "https://dropbox-clone-ryan-default-rtdb.firebaseio.com",
  projectId: "dropbox-clone-ryan",
  storageBucket: "dropbox-clone-ryan.appspot.com",
  messagingSenderId: "158408498075",
  appId: "1:158408498075:web:58225878a37d37aaeb9f3e",
  measurementId: "G-H1CVP5L53D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);