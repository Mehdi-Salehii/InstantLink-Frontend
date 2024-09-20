import { useState } from "react";
import { io } from "socket.io-client";
//backend url
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";
const socket = io(BACKEND_URL);
function App() {
  const [connected, setConnected] = useState("🔴");
  socket.on("connect", () => {
    setConnected("🟢");
    console.log(`connected ${socket.id}`);
  });
  return <div className="grid place-items-center">{connected}</div>;
}

export default App;
