// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALUmZBhEjTvFY16cuEpBdJaOenWrQxA-U",
  authDomain: "pandas-f7fff.firebaseapp.com",
  projectId: "pandas-f7fff",
  storageBucket: "pandas-f7fff.firebasestorage.app",
  messagingSenderId: "423307147483",
  appId: "1:423307147483:web:e9ea34fdfb48c45820f4fe",
  measurementId: "G-YJWQSYELRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
