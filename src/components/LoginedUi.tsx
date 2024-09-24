import { ChatsScrollable } from "./ChatsScrollable";

export default function LoginedUi() {
  return (
    <div className=" grid sm:grid-cols-2  grow">
      <div className=" bg-red-300  sm:col-start-1 h-full p-2">
        <h2 className="text-center">chats</h2>
        <ChatsScrollable />
      </div>
      <div className="bg-teal-300  sm:col-start-2 self-center justify-self-center w-full h-full p-2">
        you haven't sent a message yet
      </div>
    </div>
  );
}
