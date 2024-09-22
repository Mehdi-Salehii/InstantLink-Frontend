import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type headerProps = {
  className?: string;
};
export default function Header({
  children,
  className,
}: PropsWithChildren<headerProps>) {
  return (
    <div className={twMerge("flex bg-yellow-400", className)}>{children}</div>
  );
}
