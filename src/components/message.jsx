import avatarTwo from "/src/assets/Images/avtwo.png";

const MessagesComp = () => {
    return ( <>
    <div className="MessagesWrapper">
        <div className="MessagesHeader">
<div className="MessageProfile">
<img src={avatarTwo} alt="" />
<p>Danny</p>
            </div>
            <div className="MessagesLogout">
            <i className="fa-solid fa-power-off"></i>
            </div>
        </div>
        <div className="MessagesContainer">
            
        </div>
        <div className="MessagesFooter">
        <i className="fa-solid fa-face-smile"></i>
            <div className="MessagesInput">
                <input type="text" placeholder="Type Your Messages Here" />
                <button><i className="fa-regular fa-paper-plane"></i></button>
            </div>
        </div>
    </div>
    </> );
}
 
export default MessagesComp;