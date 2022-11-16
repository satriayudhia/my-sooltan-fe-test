import React, { useContext } from "react";
import { IoMdPeople } from "react-icons/io";
import Button from "../atoms/Button";

import { AppContext } from "../../configs/context";

const ProfileSidebar = () => {
  const [state, dispatch] = useContext(AppContext);
  const { userInfo } = state;

  return (
    <div>
      <img
        src={userInfo.avatar_url}
        alt={userInfo.name}
        className="w-100 h-100 rounded-circle d-block"
        title={userInfo.name}
      />

      <div className="username-txt">{userInfo.login}</div>
      <Button text="Follow" onClick={() => console.log("")} />
      <div className="follower-container gap-2">
        <IoMdPeople size={20} />
        <div className="follower-txt">
          <strong>{userInfo.followers}</strong> followers &#8226;{" "}
          <strong>{userInfo.following}</strong> following
        </div>
      </div>

      <div className="follower-txt mt-3">Block or Report</div>
    </div>
  );
};

export default ProfileSidebar;
