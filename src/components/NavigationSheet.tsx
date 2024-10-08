import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserAvatar } from "./UserAvatar";
import { LogoutConfirm } from "./LogoutConfirm";
export type classNameType = {
  className?: string;
};
export function NavigaitonSheet({ className }: classNameType) {
  const { user } = useSelector((state: RootState) => state.user);
  const userDisplayName = user?.displayName || user?.email?.split("@")[0];
  return (
    <div className={twMerge(className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent side={"left"} className="sm:w-[51%]">
          <SheetHeader>
            <UserAvatar className={"w-16 h-16 mt-3 mx-auto"} />
            <p>
              Welcome{" "}
              <span className="font-semibold text-primary">
                {userDisplayName}
              </span>
              !
            </p>
          </SheetHeader>
          <SheetFooter className="mt-5">
            <SheetClose asChild>
              <LogoutConfirm />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
