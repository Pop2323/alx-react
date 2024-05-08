import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{ color: "#2b2a2a", fontWeight: "bold", border: "none", background: "none", fontSize: "16px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="closeIcon" width="10px" />
    </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;