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
  const { connection } = useSelector((state: RootState) => state.user);
  return (
    <div className={twMerge("flex bg-yellow-400", className)}>
      {children}
      <LogoutButton className={"h-10 "} />
      <img src={logo} alt="instantlink logo" className="w-16" />
      <div>{connection}</div>
    </div>
  );
}
