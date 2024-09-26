import ChatBox from "./ChatBox";
import { ChatsList } from "./ChatsList";


export default function LoginedUi() {
  return (
    <div key={"loginedui"} className=" flex flex-col  grow">
      <ChatsList />
      {false && <ChatBox />}
    </div>
  );
}
