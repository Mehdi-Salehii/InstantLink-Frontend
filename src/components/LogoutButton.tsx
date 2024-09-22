import { auth } from "@/firebase/firebase";
import { RootState } from "@/redux/store";
import { setUser } from "@/redux/userSlice";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

export default function LogoutButton({ className }: { className: string }) {
  const { user } = useSelector((state: RootState) => state.user);
  const [error, setError] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    console.log("handleLogout ran");
    try {
      await signOut(auth);
      setError(undefined);
      dispatch(setUser(null));
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
        {/* <h2 className="text-2xl font-bold">Welcome, {user.email}</h2> */}
        {error && <p className="text-red-500">{error}</p>}
        <button
          className={twMerge(
            " px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none",
            className
          )}
          onClick={handleLogout}
        >
          Log Out
        </button>
      </>
    )
  );
}
