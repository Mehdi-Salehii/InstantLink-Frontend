import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { classNameType } from "./NavigationSheet";
import { twMerge } from "tailwind-merge";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `chat with user ${a.length - i}`
);

export function ChatsScrollable({ className }: classNameType) {
  return (
    <ScrollArea className={twMerge("h-72 w-full rounded-md ", className)}>
      <div className="p-4 ">
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
