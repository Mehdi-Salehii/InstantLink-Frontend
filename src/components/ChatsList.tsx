import { ScrollArea } from "@/components/ui/scroll-area";
import { classNameType } from "./NavigationSheet";
import { twMerge } from "tailwind-merge";
import ChatListItem from "./ChatListItem";

const users = Array.from({ length: 50 })

  .map((_, i) => {
    return { name: `user ${i + 1}`, id: `${i}` };
  });

export function ChatsList({ className }: classNameType) {
  return (
    <div className="  sm:col-start-1 h-full p-2">
      <h2 className="text-center">chats</h2>

      <ScrollArea
        className={twMerge("h-[81svh] w-full rounded-md  ", className)}
      >
        <div className="p-4 space-y-1  ">
          {users.map((user, i, users) => (
            <ChatListItem {...{ i, user, users }} key={i} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
