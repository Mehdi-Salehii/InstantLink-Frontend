import { RootState } from "@/redux/store";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { NavigaitonSheet } from "./NavigationSheet";
import { LogoutConfirm } from "./LogoutConfirm";
import ChattingToRibbon from "./ChattingToRibbon";

type headerProps = {
  className?: string;
};
export default function Header({ children }: PropsWithChildren<headerProps>) {
  const { connection, user, chattingTo } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <div className="p-2  grid grid-cols-3 items-center bg-primary">
      {children}
      {user && (
        <div className="justify-self-start col-start-1 w-full">
          <div className="hidden sm:block sm:w-1/2 md:w-1/3">
            <LogoutConfirm />
          </div>
          <NavigaitonSheet className="sm:hidden" />
        </div>
      )}
      <div className="justify-self-center col-start-2">
        {chattingTo && <ChattingToRibbon />}
      </div>
      <div className="connection justify-self-end col-start-3">
        {connection}
      </div>
    </div>
  );
}
