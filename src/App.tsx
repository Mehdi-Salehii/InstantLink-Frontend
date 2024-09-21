import { useEffect } from "react";
import { io } from "socket.io-client";
//get backend url
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  useEffect(() => {
    const connection_indicator = document.querySelector(
      ".connection-indicator"
    ) as HTMLDivElement;
    connection_indicator.innerText = "🔴";
    const newSocket = io(backendUrl, { transports: ["websocket"] });

    newSocket.on("connect", () => {
      console.log(`connected ${newSocket.id}`);
      connection_indicator.innerText = "🟢";
    });
    newSocket.on("disconnect", () => {
      connection_indicator.innerText = "🔴";
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return <div className="connection-indicator grid place-items-center"></div>;
}

export default App;
