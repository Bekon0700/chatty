import {RiPhoneLine, RiVideoAddLine} from 'react-icons/ri'
import {BsThreeDotsVertical} from 'react-icons/bs'

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
    </div>
  )
}
