import { ArrowLeft, SendHorizontalIcon } from "lucide-react";
import { Input } from "./ui/input";
import { FormEvent, useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import { useMediaQuery } from "react-responsive";
import { setChattingTo } from "@/redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ChatBox() {
  const [curMessage, setCurMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="flex flex-col grow  relative">
      {!isDesktop && (
        <button
          onClick={() => {
            dispatch(setChattingTo(null));
            navigate("/");
          }}
          className="  absolute left-5 top-5 border border-foreground rounded-full p-2"
        >
          <ArrowLeft className="size-5 text-foreground" />
        </button>
      )}
      <div className="grow  sm:p-3 p-2  ">
        <div
          style={{ scrollbarWidth: "none" }}
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
      <form className="  sm:p-3 p-2 flex gap-2" onSubmit={handleSubmit}>
        <Input
          placeholder="Message"
          value={curMessage}
          onChange={(e) => setCurMessage(e.currentTarget.value)}
          className="border-gray-400"
        />
        <button className=" rounded-full border bg-blue-950 border-black/40  flex aspect-square w-10 h-10 justify-center items-center">
          <SendHorizontalIcon className="text-white " />
        </button>
      </form>
    </div>
  );
}
