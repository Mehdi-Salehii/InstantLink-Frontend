import { z } from "zod";
import {
  auth,
  googleProvider,
  githubProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "./firebase";

// Zod validation schema
const emailPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Sign-up with email and password
export async function signUpWithEmail(email: string, password: string) {
  const validation = emailPasswordSchema.safeParse({ email, password });
  if (!validation.success) {
    return { error: validation.error.flatten().fieldErrors };
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error: any) {
    return { error: error.message };
  }
}

// Sign-in with email and password
export async function signInWithEmail(email: string, password: string) {
  const validation = emailPasswordSchema.safeParse({ email, password });
  if (!validation.success) {
    return { error: validation.error.flatten().fieldErrors };
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error: any) {
    return { error: error.message };
  }
}

// Google Sign-in
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

// GitHub Sign-in
export async function signInWithGithub() {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    return result;
  } catch (error: any) {
    return { error: error.message };
  }
}

// Logout
export async function logout() {
  try {
    await signOut(auth);
  } catch (error: any) {
    return { error: error.message };
  }
}
