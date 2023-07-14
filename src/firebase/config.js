import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDRn9TPNKigGJ8UbUyzModn6_-t2RmG2RE",
    authDomain: "fir-9-studying.firebaseapp.com",
    projectId: "fir-9-studying",
    storageBucket: "fir-9-studying.appspot.com",
    messagingSenderId: "552430220977",
    appId: "1:552430220977:web:275e3f1e3995547eea9490"
  };

const app=initializeApp(firebaseConfig);

const auth= getAuth(app);

export { auth , createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged};