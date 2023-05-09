import {RiSearchLine} from 'react-icons/ri';
import ChatHeadBox from './ChatHeadBox';
import Contact from './Contact';


export default function ContactPanel() {
  return (
    <div className="contact-panel">
      <p className="contact-panel__title">Chats</p>
      <div className="contact-panel__search">
        <RiSearchLine className="icon" />
        <p>search users</p>
      </div>

      <div className='contact-panel__chat-head-container'>
        <ChatHeadBox />
        <ChatHeadBox />
        <ChatHeadBox />
        <ChatHeadBox />
        <ChatHeadBox />
        <ChatHeadBox />
        <ChatHeadBox />
        <ChatHeadBox />
        <ChatHeadBox />
      </div>

      <p className='contact-panel__recent-title'>Recent</p>

      <div className='contact-panel__contact-info'>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  )
}
