import addServerLogo from "../../../assets/add.png";
import discoverServerLogo from "../../../assets/discover.png";
import discordLogo from "../../../assets/discord.png";
import "./Common.css";

const Common = (props) => {
  return (
    <div className="common">
      <div className="add-server">
        <img className="discord-image" src={discordLogo} alt="" />
        <div className="joined-server-list">{props.children}</div>
        <img className="add-server-image" src={addServerLogo} alt="" />
        <img
          className="discover-server-image"
          src={discoverServerLogo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Common;
