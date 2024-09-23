import { useEffect } from "react";
import { io } from "socket.io-client";
import AuthUi from "./components/AuthUi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { setConnection } from "./redux/userSlice";

//get backend url
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const dispatch = useDispatch();

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
    <div className="flex flex-col min-h-svh">
      <Header className={" px-2 py-[1px] bg-teal-100"} />
      <div className="connection-indicator grid place-items-center grow">
        <AuthUi />
      </div>
      <Footer />
    </div>
  );
}

export default App;
