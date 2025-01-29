// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1vY0XltKhRN0bOE93C9pioSq2CjNrxBM",
  authDomain: "destin-ai-hackathon.firebaseapp.com",
  projectId: "destin-ai-hackathon",
  storageBucket: "destin-ai-hackathon.firebasestorage.app",
  messagingSenderId: "498503222977",
  appId: "1:498503222977:web:d2db8ce122da6e4ace7640",
  measurementId: "G-8KSEGWMBTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
