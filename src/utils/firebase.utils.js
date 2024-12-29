import { initializeApp } from "firebase/app";

// AUTHENTICATION FUNCTIONALITY
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
  // sign out
  signOut,
  // listener
  onAuthStateChanged,
} from "firebase/auth";

// DATABASE FUNCTIONALITY
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// CONFIGURE APP
const firebaseConfig = {
  apiKey: "AIzaSyCT-BOt0RR4tN7kVgwGsCVpUvkxfnJCin4",
  authDomain: "e-store-cbeac.firebaseapp.com",
  projectId: "e-store-cbeac",
  storageBucket: "e-store-cbeac.firebasestorage.app",
  messagingSenderId: "980500307602",
  appId: "1:980500307602:web:0c8cf120639e153ddb904b",
};

// INITIALIZE APP
const app = initializeApp(firebaseConfig);

// GOOGLE SIGN IN PROVIDER
const googleProvider = new GoogleAuthProvider();

// POP UP WINDOW
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// AUTH TOKEN
export const auth = getAuth();

// POP UP WINDOW FUNCTIONALITY
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// ACCESS DATABASE
export const db = getFirestore();

// upload shop data.js file into database
export const addCollectionAndDocuments = async (
  collectionkey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  // generates query off the collectionRef, gives obj
  const q = query(collectionRef);

  const q_snapshot = await getDocs(q);
  return q_snapshot.docs.map((docSnapshot) => docSnapshot.data());
};

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

// auth tracks what user to sign out
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
