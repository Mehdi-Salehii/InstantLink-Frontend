import { RootState } from "@/redux/store";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import LogoutButton from "./LogoutButton";
import logo from "@/assets/logo.png";
import { NavigaitonSheet } from "./NavigationSheet";

type headerProps = {
  className?: string;
};
export default function Header({
  children,
  className,
}: PropsWithChildren<headerProps>) {
  const { connection, user } = useSelector((state: RootState) => state.user);
  const userDisplayName = user?.displayName || user?.email?.split("@")[0];
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
            <LogoutButton className={"h-10  "} />
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
