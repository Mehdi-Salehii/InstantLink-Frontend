import { useEffect, useState } from "react";
import { io } from "socket.io-client";
//get backend url
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [connected, setConnected] = useState("🔴");

  useEffect(() => {
    const newSocket = io(backendUrl, { transports: ["websocket"] });

    newSocket.on("connect", () => {
      setConnected("🟢");
      console.log(`connected ${newSocket.id}`);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return <div className="grid place-items-center">{connected}</div>;
}

export default App;
