const MessageBubble = ({
  message,
  isSent,
  timestamp,
  index,
}: {
  index: number | string;
  message: string;
  isSent: boolean;
  timestamp: number;
}) => {
  return (
    <div
      key={index}
      className={`flex ${isSent ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`relative max-w-xs px-4 py-2 rounded-lg ${isSent ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"} ${isSent ? "rounded-br-none" : "rounded-bl-none"}`}
      >
        <p className="mb-2">{message}</p>
        <span
          className={`text-xs text-${isSent ? "white" : "black"} absolute bottom-[2px] ${!isSent ? "left-[3px]" : "right-[3px]"} `}
        >
          {new Intl.DateTimeFormat("en-GB", {
            timeStyle: "short",
          }).format(timestamp)}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
