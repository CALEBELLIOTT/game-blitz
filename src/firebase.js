// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBlI5UxwZMVKXS9djxnTZrdbQpDHwERS58",
  authDomain: "asset-watch.firebaseapp.com",
  projectId: "asset-watch",
  storageBucket: "asset-watch.appspot.com",
  messagingSenderId: "773756041210",
  appId: "1:773756041210:web:fedffd01144110bb415643"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;