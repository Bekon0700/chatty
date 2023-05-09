import {RiPhoneLine, RiVideoAddLine, RiEmotionHappyLine, 
        RiSendPlane2Fill, RiAttachment2, RiImage2Line} from 'react-icons/ri'
import {BsThreeDotsVertical} from 'react-icons/bs'
import MessageBox from './MessageBox';

export default function ChatPanel() {
  return (
    <div className="chat-panel">
      <div className="chat-panel__top">
        <div className='user'>
          <p className='img'>R</p>
          <p className='name'>Ratul Sikder</p>
        </div>
        <div className='options'>
          <RiPhoneLine className="icon"/>
          <RiVideoAddLine className="icon"/>
          <BsThreeDotsVertical className="icon"/>
        </div>
      </div>

      <div className='chat-panel__middle'>
        <MessageBox sender="self"/>
        <MessageBox sender="other"/>
        <MessageBox sender="self"/>
        <MessageBox sender="self"/>
      </div>

      <div className='chat-panel__bottom'>
        <div className='message-send'>
          <input type="text" placeholder='send message...'/>
          <RiEmotionHappyLine className="icon"/>
        </div>
        <div className='options'>
          <RiAttachment2 className="icon"/>
          <RiImage2Line className="icon"/>
          <RiSendPlane2Fill className="icon"/>
        </div>
      </div>
    </div>
  )
}
