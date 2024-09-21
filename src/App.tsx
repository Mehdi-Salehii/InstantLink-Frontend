import { useEffect, useState } from "react";
import { io } from "socket.io-client";
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
    <div className="connection-indicator grid place-items-center">
      {connected}
    </div>
  );
}

export default App;
