import React from "react";
import { IoMdPeople } from "react-icons/io";
import Button from "../atoms/Button";

const ProfileSidebar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/67740020?v=4"
        alt="profile avatar"
        className="w-100 h-100 rounded-circle d-block"
      />

      <div className="username-txt">satriayudhia</div>
      <Button text="Follow" onClick={() => console.log("")} />
      <div className="follower-container gap-2">
        <IoMdPeople size={20} />
        <div className="follower-txt">
          <strong>5</strong> followers &#8226; <strong>8</strong> following
        </div>
      </div>

      <div className="follower-txt mt-3">Block or Report</div>
    </div>
  );
};

export default ProfileSidebar;
