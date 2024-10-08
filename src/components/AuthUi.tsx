import { useState, useEffect } from "react";
import { auth, googleProvider, githubProvider } from "@/firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { z } from "zod";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setUser } from "@/redux/userSlice";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AuthUi = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const [isSignUp, setIsSignUp] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, uid } = currentUser;
        dispatch(setUser({ email, displayName, uid }));
      }
    });
    return () => unsubscribe();
  }, []);

  const handleEmailSignIn = async () => {
    const result = schema.safeParse({ email, password });
    if (!result.success) {
      setError(
        result.error.format().email?._errors[0] ||
          result.error.format().password?._errors[0]
      );
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(undefined);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleEmailSignUp = async () => {
    const result = schema.safeParse({ email, password });
    if (!result.success) {
      setError(
        result.error.format().email?._errors[0] ||
          result.error.format().password?._errors[0]
      );
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError(undefined);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setError(undefined);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      setError(undefined);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    !user && (
      <div key={"authui"} className="    text-gray-900 dark:text-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <>
            <h2 className="text-2xl font-bold text-center">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>

            {error && <p className="text-red-500">{error}</p>}

            <div className="space-y-2 ">
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center justify-between space-y-3 ">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={isSignUp ? handleEmailSignUp : handleEmailSignIn}
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>

              <button
                className="text-sm text-blue-500 hover:underline self-end"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Already have an account?" : "Create an account"}
              </button>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-600">or</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col space-y-2">
              <button
                className="w-full flex justify-center items-center px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle className="mr-6 text-xl" /> Sign in with Google
              </button>
              <button
                className="w-full flex justify-center items-center px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none"
                onClick={handleGithubSignIn}
              >
                <FaGithub className="mr-6 text-xl" /> Sign in with GitHub
              </button>
            </div>
          </>
        </div>
      </div>
    )
  );
};

export default AuthUi;
