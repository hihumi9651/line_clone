import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDweJjt7GqMy5CZMBOYOr1dv47e9V1_uKk",
  authDomain: "line-clone-e0572.firebaseapp.com",
  projectId: "line-clone-e0572",
  storageBucket: "line-clone-e0572.appspot.com",
  messagingSenderId: "456443825764",
  appId: "1:456443825764:web:ee5a93a622a128e29c1971"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
