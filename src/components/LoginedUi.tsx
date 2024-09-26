import ChatBox from "./ChatBox";
import { ChatsScrollable } from "./ChatsScrollable";

export default function LoginedUi() {
  return (
    <div key={"loginedui"} className=" flex  grow">
      {false && (
        <div className=" bg-red-300  sm:col-start-1 h-full p-2">
          <h2 className="text-center">chats</h2>
          <ChatsScrollable />
        </div>
      )}
      <ChatBox />
    </div>
  );
}
