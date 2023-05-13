import SingleMessage from "./SingleMessage";

export default function MessageBox(props : any) {
  return (
    <div className={props.sender == 'self' ? "self-box message-box" : "message-box"}>
      <p className={props.sender == 'self' ? 'none' : "user-img"}>R</p>
      <div className="message-box__container">
        <SingleMessage sender={props.sender} message="myself vai"/>
        <SingleMessage sender={props.sender} message="kamon achen"/>
        <SingleMessage sender={props.sender} message="MashaAllah"/>
      </div>
    </div>
  )
}
