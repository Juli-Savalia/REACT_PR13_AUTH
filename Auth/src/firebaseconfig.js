import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyBmH-YVckj0wHJhyvpmR69PVfBUcdj59jM",
  authDomain: "auth-bcd94.firebaseapp.com",
  projectId: "auth-bcd94",
  storageBucket: "auth-bcd94.appspot.com",
  messagingSenderId: "167331681759",
  appId: "1:167331681759:web:306759277fb115c3ec606a",
  measurementId: "G-W36PPY7S8G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleauthprovider = new GoogleAuthProvider();
