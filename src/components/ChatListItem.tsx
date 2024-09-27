import { useDispatch } from "react-redux";
import { setChattingTo } from "@/redux/userSlice";
import { UserAvatar } from "./UserAvatar";

export default function ChatListItem({
  user,
}: {
  user: { name: string; id: string };
  i: number;
  users: (typeof user)[];
}) {
  const dispatch = useDispatch();

  return (
    <div className="text-sm flex items-center gap-5 border border-slate-300 p-2 rounded-md shadow-md shadow-slate-400/50">
      {" "}
      <a
        href=""
        className="cursor-pointer block "
        onClick={() => dispatch(setChattingTo(user.id))}
      >
        <div className="flex items-center gap-2">
          <UserAvatar
            {...{
              alt: user.name,
              ...(user.name ? { name: user.name } : { email: user.id }),
              className: "grid place-items-center border border-gray-500 ",
            }}
          />
          <p>{user.name}</p>
        </div>
      </a>
    </div>
  );
}
