import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDPZ5c2xZ-T1Sf7ImneA-STa7w1O9um3-I",
    authDomain: "journal-app-45640.firebaseapp.com",
    projectId: "journal-app-45640",
    storageBucket: "journal-app-45640.appspot.com",
    messagingSenderId: "765072454311",
    appId: "1:765072454311:web:4d6326db4e9f5209bca182",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { db, googleAuthProvider, firebase };
