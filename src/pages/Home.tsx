import ChatPanel from "../components/chat-panel/ChatPanel"
import ContactPanel from "../components/contact-panel/ContactPanel"
import LeftPanel from "../components/left-panel/LeftPanel"

export default function Home() {
  return (
    <div className="home-container">
      <LeftPanel />
      <ContactPanel />
      <ChatPanel />
    </div>
  )
}
