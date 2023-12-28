import avatarOne from "/src/assets/Images/avone.png";
import avatarTwo from "/src/assets/Images/avtwo.png";
import avatarThree from "/src/assets/Images/avthree.png";
import avatarFour from "/src/assets/Images/avfour.png";
import ChatComp from "../../components/chats";
import WelcomeMessage from "../../components/wlcome";
const Chat = () => {
  const chartData = [
    { img: avatarOne, name: "Danny", active: "" },
    { img: avatarTwo, name: "okey", active: "" },
    { img: avatarThree, name: "musa", active: "" },
  ];
  const mappedChartData = chartData.map((charts) => {
    return (
      <ChatComp imageSrc={charts.img} key={charts.name} title={charts.name} />
    );
  });

  return (
    <>
      <div className="messanger_page_wrapper">
        <div className="ChatListWrapper">
          <h3>CHIT CHAT</h3>
          <div className="ChatList">{mappedChartData}</div>
          <div className="ActivechatInfo">
            <img src={avatarFour} alt="" />
            <p>active </p>
          </div>
        </div>
        <div className="chatbox">
            <WelcomeMessage/>
        </div>
      </div>
    </>
  );
};

export default Chat;
