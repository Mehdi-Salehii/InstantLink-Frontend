import { useState } from "react";
import { io } from "socket.io-client";
//get backend url
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const socket = io(backendUrl, { transports: ["websocket"] });
function App() {
  const [connected, setConnected] = useState("🔴");
  socket.on("connect", () => {
    setConnected("🟢");
    console.log(`connected ${socket.id}`);
  });
  return <div className="grid place-items-center">{connected}</div>;
}

export default App;
