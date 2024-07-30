// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJI_LUgUAfltams5drmQS58_ryT1y37Sg",
  authDomain: "house-booking-5e125.firebaseapp.com",
  projectId: "house-booking-5e125",
  storageBucket: "house-booking-5e125.appspot.com",
  messagingSenderId: "1079526793862",
  appId: "1:1079526793862:web:d6dcbb8f4029138d36e707"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
