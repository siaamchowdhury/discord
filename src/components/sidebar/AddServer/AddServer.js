import Common from "../Common/Common";
import "./AddServer.css";

const AddServer = (props) => {
  return (
    <div className="add-server">
      <Common>{props.children}</Common>
    </div>
  );
};

export default AddServer;
