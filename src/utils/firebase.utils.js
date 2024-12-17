import { initializeApp } from "firebase/app";
import {
  // auth token
  getAuth,
  // pop up window for sign in
  signInWithPopup,
  // create user document with email && password
  createUserWithEmailAndPassword,
  // sign in user with email && password
  signInWithEmailAndPassword,
  // google's sign in feature
  GoogleAuthProvider,
} from "firebase/auth";

// database functions/database library
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT-BOt0RR4tN7kVgwGsCVpUvkxfnJCin4",
  authDomain: "e-store-cbeac.firebaseapp.com",
  projectId: "e-store-cbeac",
  storageBucket: "e-store-cbeac.firebasestorage.app",
  messagingSenderId: "980500307602",
  appId: "1:980500307602:web:0c8cf120639e153ddb904b",
};

const app = initializeApp(firebaseConfig);

// google's sign in
const googleProvider = new GoogleAuthProvider();

// select account pop up window prompt
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// auth token
export const auth = getAuth();

// pop up sign-in
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// access database
export const db = getFirestore();

// Create User Document
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};

// Create User with Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in User with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
