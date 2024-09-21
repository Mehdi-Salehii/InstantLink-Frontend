import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA62Qnh3x_7-AdIAAlAeLDWb9yqDfUmmVs",
  authDomain: "instantlink-b93e2.firebaseapp.com",
  projectId: "instantlink-b93e2",
  storageBucket: "instantlink-b93e2.appspot.com",
  messagingSenderId: "91133061701",
  appId: "1:91133061701:web:5eb1b6d9f623d8d842d12c",
  measurementId: "G-2GQFX2GBZV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export {
  auth,
  googleProvider,
  githubProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
