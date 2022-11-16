import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import { AppContext } from "../../configs/context";

const ProfileDropdown = () => {
  const [state, dispatch] = useContext(AppContext);
  const { userInfo } = state;

  return (
    <Dropdown>
      <Dropdown.Toggle className="profile-dropdown">
        <img
          src={userInfo.avatar_url}
          alt={userInfo.name}
          className="profile-avatar"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="dropdown-no-link">
          <div>Signed as</div>
          <strong>{userInfo.login}</strong>
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
