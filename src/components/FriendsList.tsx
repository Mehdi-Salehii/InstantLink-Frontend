import { ScrollArea } from "@/components/ui/scroll-area";
import { classNameType } from "./NavigationSheet";
import { twMerge } from "tailwind-merge";
import ChatListItem from "./ChatListItem";
import { Button } from "./ui/button";
import { UserRoundPlus } from "lucide-react";

const users = Array.from({ length: 50 })

  .map((_, i) => {
    return { name: `user ${i + 1}`, id: `${i}` };
  });

export function FriendsList({ className }: classNameType) {
  return (
    <div className={twMerge("  sm:col-start-1 h-full p-2  ", className)}>
      <h2 className="text-center">chats</h2>

      <ScrollArea className={twMerge("h-[81svh] w-full rounded-md  ")}>
        <div className="p-4 space-y-1  ">
          <Button
            variant={"default"}
            className="absolute bottom-3 right-[50%] translate-x-[50%] rounded-full flex flex-row-reverse gap-2 items-center justify-center "
          >
            <span className="font-semibold">Add a friend</span>
            <UserRoundPlus className="opacity-50" />
          </Button>
          {users.map((user, i, users) => (
            <ChatListItem {...{ i, user, users }} key={i} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
