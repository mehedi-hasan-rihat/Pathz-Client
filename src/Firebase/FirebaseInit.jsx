import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFjJsYVz9ndRiSLMSu885up7gKEoLQjM8",
  authDomain: "pathz-8bc15.firebaseapp.com",
  projectId: "pathz-8bc15",
  storageBucket: "pathz-8bc15.firebasestorage.app",
  messagingSenderId: "900088841467",
  appId: "1:900088841467:web:1aa2d2244fab6d1d2edc5e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;