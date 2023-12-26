import avatarOne from "/src/assets/Images/avone.png"
import avatarTwo from "/src/assets/Images/avtwo.png"
import avatarThree from "/src/assets/Images/avthree.png"
import avatarFour from "/src/assets/Images/avfour.png"
const AvatarSelect = () => {
    return ( <>
    <div className="avatar_wrapper">
        <p> Pick an Avatar as your profile picture</p>
        <div className="AvatarImg">
            <img src={avatarOne} alt="" />
            <img src={avatarTwo} alt="" />
            <img src={avatarThree} alt="" />
            <img src={avatarFour} alt="" />
        </div>
        <button>SET AS PROFILE PICTURE</button>
    </div>
    </> );
}
 
export default AvatarSelect;