import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { twMerge } from "tailwind-merge";
type UserAvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  className?: string;
  email?: string;
};
export function UserAvatar({
  src,
  alt,
  name,
  className,
  email,
}: UserAvatarProps) {
  const userAbbr = (
    (name && name.slice(0, 2)) ||
    (email && email.split("@")[0].slice(0, 2)) ||
    "US"
  ).toLocaleUpperCase();
  return (
    <Avatar className={twMerge(className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{userAbbr}</AvatarFallback>
    </Avatar>
  );
}
