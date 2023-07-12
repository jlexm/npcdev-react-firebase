// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJNCTsUgAcu1iTtPsRmpGJDoPynAs_OrM",
  authDomain: "npcdev-9e80b.firebaseapp.com",
  projectId: "npcdev-9e80b",
  storageBucket: "npcdev-9e80b.appspot.com",
  messagingSenderId: "101941239188",
  appId: "1:101941239188:web:ce977fbb4ca0acfdff4381"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)