import { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
function App() {
  const [connected, setConnected] = useState("🔴");
  socket.on("connect", () => {
    setConnected("🟢");
    console.log(`connected ${socket.id}`);
  });
  return <div className="grid place-items-center">{connected}</div>;
}

export default App;
