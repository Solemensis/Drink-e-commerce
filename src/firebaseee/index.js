import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnZ9O582Z1ZMGGrZApIs3iqKXqQaKtcBw",
  authDomain: "new-drink-d8d2f.firebaseapp.com",
  projectId: "new-drink-d8d2f",
  storageBucket: "new-drink-d8d2f.appspot.com",
  messagingSenderId: "269574698320",
  appId: "1:269574698320:web:b0e377d14ab2a4ecd3e855",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
