// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAag8A2Lp-Uu6E_84WPXS-yXU9Md-veAfk",
    authDomain: "ns-architect-ltd.firebaseapp.com",
    projectId: "ns-architect-ltd",
    storageBucket: "ns-architect-ltd.appspot.com",
    messagingSenderId: "471908157390",
    appId: "1:471908157390:web:c1a7422d81d929770c8d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
