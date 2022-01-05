// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxq6NsHMyQWglVKynsMPY4cZZp9qVWl3A",
  authDomain: "clone-f98ee.firebaseapp.com",
  projectId: "clone-f98ee",
  storageBucket: "clone-f98ee.appspot.com",
  messagingSenderId: "811464161434",
  appId: "1:811464161434:web:3826ec53a563bcce8c8723",
  measurementId: "G-P71R4SG15Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const auth = firebase.auth();

export { auth, db };