import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQSEG4Ep0tGC9l1Z9ttR6URgEhxVe0_eI",
  authDomain: "washa-clothing.firebaseapp.com",
  databaseURL: "https://washa-clothing.firebaseio.com",
  projectId: "washa-clothing",
  storageBucket: "washa-clothing.appspot.com",
  messagingSenderId: "1086848620466",
  appId: "1:1086848620466:web:96718b2d1507a5546a36ab",
  measurementId: "G-RSFDFEP77Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
