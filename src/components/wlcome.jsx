import robot from "/src/assets/Images/robot 1.png"
const WelcomeMessage = () => {
    return ( <>
    <div className="welcometab">
        <img src={robot} alt="welcome robot" />
        <h6>Welcome, <span>Danny</span></h6>
        <p>
        Please select chat to start messaging.
        </p>
    </div>
    </> );
}
 
export default WelcomeMessage;