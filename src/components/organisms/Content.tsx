import React from "react";
import ProfileSidebar from "../molecules/ProfileSidebar";

const Content = () => {
  return (
    <div className="container-fluid content-bg">
      <div className="container pt-5">
        <div className="row">
          <div className="col-3">
            <ProfileSidebar />
          </div>
          <div className="col-9">right</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
