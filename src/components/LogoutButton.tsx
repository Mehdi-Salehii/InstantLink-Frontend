import { auth } from "@/firebase/firebase";
import { RootState } from "@/redux/store";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function LogoutButton() {
  const { user } = useSelector((state: RootState) => state.user);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleLogout = async () => {
    try {
      await signOut(auth);
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
    user && (
      <>
        <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="w-full mt-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </>
    )
  );
}
