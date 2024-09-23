import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { classNameType } from "./NavigationSheet";
import LogoutButton from "./LogoutButton";
import { Button } from "./ui/button";

export function LogoutConfirm({ className }: classNameType) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className={className || ""}>Logout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[85%]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            you won't be able to access your chats until you login again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className=" px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none">
            {" "}
            <LogoutButton className="" />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
