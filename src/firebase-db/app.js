// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS7P_Id7xd6bZ5qRhZaWsGslTe1ebpnKo",
  authDomain: "mofmof-382e2.firebaseapp.com",
  projectId: "mofmof-382e2",
  storageBucket: "mofmof-382e2.appspot.com",
  messagingSenderId: "765506394275",
  appId: "1:765506394275:web:67a98332144868dd2dc716",
  measurementId: "G-KJ0EDEBCPL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);




