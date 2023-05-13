
export default function SingleMessage(props: any) {
  console.log(props)
  return (
    <div className={props.sender == 'self' ? 'self message-container' : 'other message-container'}>
      <p className='message'>{props.message}</p>
    </div>
  )
}
