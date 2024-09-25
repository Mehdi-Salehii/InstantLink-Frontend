import { SendHorizontalIcon } from "lucide-react";
import { Input } from "./ui/input";
import { FormEvent, useRef, useState } from "react";
export default function ChatBox() {
  const [message, setMessage] = useState("");
  const msgBoxRef = useRef<null | HTMLDivElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (msgBoxRef.current) {
      msgBoxRef.current.innerHTML += `<div>${message}</div>`;
      setMessage("");
    }
  };
  return (
    <div className="flex flex-col grow">
      <div ref={msgBoxRef} className="grow bg-yellow-400 sm:p-3 p-2">
        message box
      </div>
      <form
        className=" bg-blue-400 sm:p-3 p-2 flex gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <button className=" rounded-full border bg-blue-950 border-black/40  flex aspect-square w-10 h-10 justify-center items-center">
          <SendHorizontalIcon className="text-white " />
        </button>
      </form>
    </div>
  );
}
