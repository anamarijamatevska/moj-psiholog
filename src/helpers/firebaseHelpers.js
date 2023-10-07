import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzKcaNeRGCjDyelg6vBA2zxe-jSyqhnrs",
  authDomain: "moj-psiholog-9b2f8.firebaseapp.com",
  projectId: "moj-psiholog-9b2f8",
  storageBucket: "moj-psiholog-9b2f8.appspot.com",
  messagingSenderId: "479730399452",
  appId: "1:479730399452:web:be27c714dcb96e985d1c19"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const getFirebaseConfig = () => {
  return {
    firebaseConfig,
    app,
    auth,
    db
  }
}