// import { RootState } from "@/redux/store";
import ChatBox from "./ChatBox";
import { FriendsList } from "./FriendsList";
// import { useSelector } from "react-redux";

export default function LoginedUi() {
  // const { chattingTo } = useSelector((state: RootState) => state.user);
  return (
    <div key={"loginedui"} className=" flex   grow ">
      {true && <FriendsList />}
      <ChatBox />
    </div>
  );
}
