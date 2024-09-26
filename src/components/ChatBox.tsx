import { SendHorizontalIcon } from "lucide-react";
import { Input } from "./ui/input";
import { FormEvent, useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
// const wait = async (n: number) => {
//   return new Promise((res) => setTimeout(res, n));
// };
export default function ChatBox() {
  const [curMessage, setCurMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    if (scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (curMessage.trim()) {
      setMessages((pervMessages) => [...pervMessages, curMessage]);
      setCurMessage("");
    }
  };
  useEffect(() => {
    scrollToElement();
  }, [messages]);

  return (
    <div className="flex flex-col grow">
      <div className="grow bg-yellow-400 sm:p-3 p-2  ">
        <div
          style={{ scrollbarWidth: "thin" }}
          className="overflow-y-auto  max-h-[79svh] sm:max-h-[73svh] "
        >
          {messages.map((message, i) => (
            <MessageBubble
              isSent={true}
              index={i}
              message={message}
              timestamp={Date.now()}
            />
          ))}
          <div ref={scrollRef} className=""></div>
        </div>
      </div>
      <form
        className=" bg-blue-400 sm:p-3 p-2 flex gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Message"
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
