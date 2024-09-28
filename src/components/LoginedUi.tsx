// import { RootState } from "@/redux/store";
import { Route, Routes } from "react-router-dom";
import ChatBox from "./ChatBox";
import { FriendsList } from "./FriendsList";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";

export default function LoginedUi() {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const { chattingTo } = useSelector((state: RootState) => state.user);
  console.log(isDesktop);
  return (
    <div key={"loginedui"} className=" flex   grow ">
      {isDesktop ? (
        // Desktop view: Show both friends list and chat side by side
        <div className="desktop-layout flex grow ">
          <FriendsList />
          {chattingTo && <ChatBox />}
        </div>
      ) : (
        // Mobile view: Switch between friends list and chat views
        <Routes>
          <Route
            path="/"
            element={
              <FriendsList
                className={`${!isDesktop ? "mx-auto w-[85%]" : ""}`}
              />
            }
          />
          <Route path="/:friendId" element={<ChatBox />} />
        </Routes>
      )}
    </div>
  );
}
