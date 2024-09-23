import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { classNameType } from "./NavigationSheet";
import { twMerge } from "tailwind-merge";

export function UserAvatar({ className }: classNameType) {
  const { user } = useSelector((state: RootState) => state.user);
  const userAvatar = user?.photoURL || "";
  const userAbbr = user?.displayName
    ? user?.displayName.split(" ").length > 1
      ? user?.displayName.split(" ").map((word) => word.slice(0, 1))
      : user?.displayName.slice(0, 2)
    : user?.email?.split("@")[0].slice(0, 2).toUpperCase();
  return (
    <Avatar className={twMerge(className)}>
      <AvatarImage src={userAvatar} alt="@shadcn" />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  );
}
