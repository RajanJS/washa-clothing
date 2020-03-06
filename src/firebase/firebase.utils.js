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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
