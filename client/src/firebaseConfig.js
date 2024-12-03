import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbujqtJXHDBMXWYKyhIDTTwJ7KwM6LG6Q",
  authDomain: "hairbnb-ab317.firebaseapp.com",
  projectId: "hairbnb-ab317",
  storageBucket: "hairbnb-ab317.firebasestorage.app",
  messagingSenderId: "298754418774",
  appId: "1:298754418774:web:c967a78fa8988ede6f33f7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
