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

import LogoutButton from "./LogoutButton";
import { Button } from "./ui/button";

export function LogoutConfirm() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={
            " px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none sm:w-1/2 mx-auto md:w-[60%]"
          }
        >
          Logout
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[85%]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            you won't be able to access your chats until you login again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row sm:justify-around items-center justify-around mt-0">
          <AlertDialogCancel asChild>
            <Button variant={"outline"} className="m-0">
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <LogoutButton className="w-1/3 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none" />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
