import { useSelector } from "react-redux";
import { UserAvatar } from "./UserAvatar";
import { RootState } from "@/redux/store";

export default function ChattingToRibbon() {
  const { chattingTo } = useSelector((state: RootState) => state.user);

  return (
    <div className="flex items-center gap-2">
      <UserAvatar name={`user ${chattingTo ? +chattingTo + 1 : ""}`} />

      <p className="text-white">{`user ${chattingTo ? +chattingTo + 1 : ""}`}</p>
    </div>
  );
}
