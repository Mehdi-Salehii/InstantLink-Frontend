import { RootState } from "@/redux/store";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

import logo from "@/assets/logo.png";
import { NavigaitonSheet } from "./NavigationSheet";
import { LogoutConfirm } from "./LogoutConfirm";

type headerProps = {
  className?: string;
};
export default function Header({
  children,
  className,
}: PropsWithChildren<headerProps>) {
  const { connection, user } = useSelector((state: RootState) => state.user);

  return (
    <div className={twMerge(className, "grid grid-cols-3 items-center")}>
      {children}
      {user && (
        <div className="justify-self-start col-start-1 w-full">
          <div className="hidden sm:block sm:w-1/2 md:w-1/3">
            <LogoutConfirm />
          </div>
          <NavigaitonSheet className="sm:hidden" />
        </div>
      )}

      <a href="/" className="justify-self-center">
        <img
          src={logo}
          alt="instantlink logo"
          className="w-16 logo justify-self-center col-start-2"
        />
      </a>
      <div className="connection justify-self-end col-start-3">
        {connection}
      </div>
    </div>
  );
}
