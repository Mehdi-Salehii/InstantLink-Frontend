import { SendHorizontalIcon } from "lucide-react";
import { Input } from "./ui/input";
import { FormEvent, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  const [curMessage, setCurMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const msgBoxRef = useRef<null | HTMLDivElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (curMessage.trim()) {
      setMessages((pervMessages) => [...pervMessages, curMessage]);
      setCurMessage("");
    }
  };
  return (
    <div className="flex flex-col grow">
      <div ref={msgBoxRef} className="grow bg-yellow-400 sm:p-3 p-2">
        {messages.map((message, i) => (
          <MessageBubble
            isSent={true}
            key={i}
            message={message}
            timestamp={Date.now()}
          />
        ))}
      </div>
      <form
        className=" bg-blue-400 sm:p-3 p-2 flex gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="curMessage"
          value={curMessage}
          onChange={(e) => setCurMessage(e.currentTarget.value)}
        />
        <button className=" rounded-full border bg-blue-950 border-black/40  flex aspect-square w-10 h-10 justify-center items-center">
          <SendHorizontalIcon className="text-white " />
        </button>
      </form>
    </div>
  );
}
