import ChatBox from "./ChatBox";
import { ChatsList } from "./ChatsList";

export default function LoginedUi() {
  return (
    <div key={"loginedui"} className=" flex flex-col  grow">
      <ChatBox />
      {false && <ChatsList />}
    </div>
  );
}
