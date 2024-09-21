import "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { auth } from "../firebase/firebase";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const ui = new firebaseui.auth.AuthUI(auth);

// FirebaseUI configuration
const uiConfig = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    GithubAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/", // Redirect URL after sign-in
};

// Start the FirebaseUI authentication widget
ui.start("#firebaseui-auth-container", uiConfig);

const AuthUi = () => {
  return <div id="firebaseui-auth-container"></div>;
};
export default AuthUi;
