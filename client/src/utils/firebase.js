
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiagent-b9c5c.firebaseapp.com",
  projectId: "aiagent-b9c5c",
  storageBucket: "aiagent-b9c5c.firebasestorage.app",
  messagingSenderId: "256221213331",
  appId: "1:256221213331:web:ee89373678dd7a6e045366"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}