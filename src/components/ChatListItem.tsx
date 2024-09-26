import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import { Avatar } from "./ui/avatar";

export default function ChatListItem({
  user,
  i,
}: {
  user: { name: string };
  i: number;
  users: (typeof user)[];
}) {
  return (
    <>
      <div
        key={i}
        className="text-sm flex items-center gap-5 border border-slate-300 p-2 rounded-md shadow-md shadow-slate-400/50"
      >
        {" "}
        <Avatar className="grid place-items-center border border-gray-500 ">
          <AvatarImage src={"nothing"} alt="@shadcn" />
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <a href="#" className="cursor-pointer block ">
          <p>{user.name}</p>
        </a>
      </div>
    </>
  );
}
