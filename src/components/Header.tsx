import { RootState } from "@/redux/store";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import LogoutButton from "./LogoutButton";
import logo from "@/assets/logo.png";

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
        <div className="left flex gap-5 items-center">
          <LogoutButton className={"h-10  "} />
          <p className="">
            Welcome <span className="font-semibold">{userDisplayName}</span> !
          </p>
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
