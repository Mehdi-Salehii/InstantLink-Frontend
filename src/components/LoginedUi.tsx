// import { RootState } from "@/redux/store";
import ChatBox from "./ChatBox";
import { ChatsList } from "./ChatsList";
// import { useSelector } from "react-redux";

export default function LoginedUi() {
  // const { chattingTo } = useSelector((state: RootState) => state.user);
  return (
    <div key={"loginedui"} className=" flex flex-col  grow">
      <ChatBox />
      {false && <ChatsList />}
    </div>
  );
}
