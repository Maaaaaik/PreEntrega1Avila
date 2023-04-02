import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyACarg9DWrN-XIMjxx2RqgF7uxsjL7s3Ok",
    authDomain: "malakita-b8df8.firebaseapp.com",
    projectId: "malakita-b8df8",
    storageBucket: "malakita-b8df8.appspot.com",
    messagingSenderId: "586002381192",
    appId: "1:586002381192:web:8a94f7ad5e05e0e010a23d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;