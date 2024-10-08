import { useEffect } from "react";
import { io } from "socket.io-client";
import AuthUi from "./components/AuthUi";
import Header from "./components/Header";

import { useDispatch, useSelector } from "react-redux";
import { setConnection } from "./redux/userSlice";

import { RootState } from "./redux/store";
import LoginedUi from "./components/LoginedUi";

//get backend url
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const newSocket = io(backendUrl, { transports: ["websocket", "polling"] });
    newSocket.on("connect", () => {
      console.log(`connected ${newSocket.id}`);
      dispatch(setConnection("🟢"));
    });
    newSocket.on("disconnect", () => {});
    return () => {
      newSocket.disconnect();
      console.log("disconnected");
      dispatch(setConnection("🔴"));
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="connection-indicator  grow flex flex-col">
        {user ? (
          <LoginedUi />
        ) : (
          <div className="w-full grid place-items-center">
            <AuthUi />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
