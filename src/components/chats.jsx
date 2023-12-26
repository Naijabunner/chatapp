
const ChatComp = (props) => {
    return ( <>
    <div className="chatInfo">
        <img src={props.imageSrc} alt="" />
        <p>{props.title}</p>
    </div>
    </> );
}
 
export default ChatComp;