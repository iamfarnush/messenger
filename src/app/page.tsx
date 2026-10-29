import Chat from "@/components/screens/chats/Chat";
import ChatsList from "@/components/screens/chats/ChatsList";
import CurrentUser from "@/components/screens/chats/CurrentUser";

export default function ChatsPage() {
  return (
    <div
      className="grid "
      style={{
        gridTemplateColumns: ".7fr 3fr",
      }}
    >
      <div className="border-r-2 border-[#363636] p-[1.2rem]">
        <CurrentUser />
        <ChatsList />
      </div>
      <div className="p-[1.2rem]">
        <Chat />
      </div>
    </div>
  );
}
