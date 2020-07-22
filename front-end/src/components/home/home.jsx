import React from "react";
import TwitterTimeline from "react-twitter-embedded-timeline";
import BtnActu from "../button/btnActu";
import "./home.css";
import NavBarCV from "../navbar/navbar";

const Home = () => {
  return (
    <>
      <NavBarCV />
      <div className="PortFolioContent">
        <div className="ActuContent">
          <div className="ActuGauche">
            <BtnActu />
            
          </div>
          <div className="ActuDroite">
            <TwitterTimeline className="TLTwitter" widgetId="TLContent" user="CzerwonyV" />
          </div>
        </div>
        <div className="PortFolioContentCard">

        </div>
      </div>
    </>
  );
};
export default Home;