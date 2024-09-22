import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import AuthUi from "./components/AuthUi";
import Header from "./components/Header";
import Footer from "./components/Footer";

//get backend url
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [connected, setConnected] = useState("🔴");

  useEffect(() => {
    const newSocket = io(backendUrl, { transports: ["websocket", "polling"] });
    newSocket.on("connect", () => {
      console.log(`connected ${newSocket.id}`);
      setConnected("🟢");
    });
    newSocket.on("disconnect", () => {});
    return () => {
      newSocket.disconnect();
      console.log("disconnected");
      setConnected("🔴");
    };
  }, []);

  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <div className="connection-indicator grid place-items-center grow">
        {connected}
        <AuthUi />
      </div>
      <Footer />
    </div>
  );
}

export default App;
