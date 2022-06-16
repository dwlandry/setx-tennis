// I'm using this file to setup everything I need to connect to my firebase app.
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc, // used to get a DOCUMENT instance
  getDoc, // used to GET the DOCUMENT DATA
  setDoc, // used to SET the DOCUMENT DATA
  // snapshotEqual
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyByEwvUITCr7kYNLhvIuwZFgiQQ1k9fSo4',
  authDomain: 'setx-tennis-db.firebaseapp.com',
  projectId: 'setx-tennis-db',
  storageBucket: 'setx-tennis-db.appspot.com',
  messagingSenderId: '191549114599',
  appId: '1:191549114599:web:a1c5eb61b165e9c2d17a42',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// const facebookProvider = new FacebookAuthProvider();

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log('userSnapshot.exists()', userSnapshot.exists());
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
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);
