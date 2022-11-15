import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import { IoIosAdd } from "react-icons/io";

const AddRepoDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="profile-dropdown">
        <IoIosAdd size={20} color="#FFFF" className="profile-avatar" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>New Repository</Dropdown.Item>
        <Dropdown.Item>Import Repository</Dropdown.Item>
        <Dropdown.Item>New codespace</Dropdown.Item>
        <Dropdown.Item>New gist</Dropdown.Item>
        <Dropdown.Item>New organization</Dropdown.Item>
        <Dropdown.Item>New project</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AddRepoDropdown;
