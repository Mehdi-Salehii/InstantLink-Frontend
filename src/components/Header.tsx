import { RootState } from "@/redux/store";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import LogoutButton from "./LogoutButton";
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
    <div
      className={twMerge(
        " bg-yellow-400",
        className,
        "grid grid-cols-3 items-center"
      )}
    >
      {children}
      {user && (
        <div>
          <div className="hidden  left sm:flex gap-5 items-center col-start-1">
            <LogoutConfirm
              className={
                " px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
              }
            />
          </div>
          <NavigaitonSheet className="sm:hidden" />
        </div>
      )}
      <img
        src={logo}
        alt="instantlink logo"
        className="w-16 logo justify-self-center col-start-2"
      />
      <div className="connection justify-self-end col-start-3">
        {connection}
      </div>
    </div>
  );
}
