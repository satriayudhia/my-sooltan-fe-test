import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const ProfileDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="profile-dropdown">
        <img
          src="https://avatars.githubusercontent.com/u/67740020?v=4"
          alt="avatar"
          className="profile-avatar"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="dropdown-no-link">
          <div>Signed as</div>
          <strong>Satriayudhia</strong>
        </div>
        <hr />
        <Dropdown.Item>Your Profile</Dropdown.Item>
        <Dropdown.Item>Your Repositories</Dropdown.Item>
        <hr />
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
