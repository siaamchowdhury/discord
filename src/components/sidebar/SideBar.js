import "./SideBar.css";
import AddServer from "./AddServer/AddServer";
import serverOne from "../../assets/ishow.jpg";
import serverTwo from "../../assets/m6.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <AddServer>
        <img className="join-server-image" src={serverOne} alt="" />
        <img className="join-server-image" src={serverTwo} alt="" />
      </AddServer>
    </div>
  );
};

export default SideBar;
