import {BsFillChatHeartFill} from 'react-icons/bs';
import {RiUser2Line, RiGroupLine, RiMessage3Line, 
        RiContactsLine, RiSettings2Line, RiGlobalLine,
        RiSunFill, RiUserFill } from 'react-icons/ri';


export default function LeftPanel() {
  return (
    <div className='left-panel'>
      <BsFillChatHeartFill  className="icon logo" />

      <div className='options-container'>
        <div className='icon-container'>
            <RiUser2Line className="icon" />
        </div>
        <div className='icon-container active'>
            <RiMessage3Line className="icon" />
        </div>
        <div className='icon-container'>
            <RiGroupLine className="icon" />
        </div>
        <div className='icon-container'>
            <RiContactsLine className="icon" />
        </div>
        <div className='icon-container'>
            <RiSettings2Line className="icon" />
        </div>
      </div>

      <div className='options-container'>
        <div className='icon-container'>
            <RiGlobalLine className="icon" />
        </div>
        <div className='icon-container'>
            <RiSunFill className="icon" />
        </div>
        <div className='icon-container'>
            <RiUserFill className="icon" />
        </div>
      </div>

    </div>
  )
}
