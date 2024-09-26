import { ScrollArea } from "@/components/ui/scroll-area";
import { classNameType } from "./NavigationSheet";
import { twMerge } from "tailwind-merge";
import ChatListItem from "./ChatListItem";

const users = Array.from({ length: 50 })

  .map((_, i) => {
    return { name: `chat with user ${i + 1}` };
  });

export function ChatsList({ className }: classNameType) {
  return (
    <div className="  sm:col-start-1 h-full p-2">
      <h2 className="text-center">chats</h2>

      <ScrollArea
        className={twMerge("h-[81svh] w-full rounded-md  ", className)}
      >
        <div key={"scrollarea"} className="p-4 space-y-5">
          {users.map((user, i, users) => (
            <a href="#" className="cursor-pointer">
              <ChatListItem {...{ i, user, users }} />
            </a>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
