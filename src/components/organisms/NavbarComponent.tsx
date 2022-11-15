import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Input from "../atoms/Input";
import ProfileDropdown from "../molecules/ProfileDropdown";
import AddRepoDropdown from "../molecules/AddRepoDropdown";

function NavbarComponent() {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    window.location.href = `/${search}`;
  };

  return (
    <div className="container-fluid header">
      <div className="container header-inner">
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="logo github"
            width={32}
            height={32}
            className="rounded-circle"
          />
          <Input
            type="text"
            placeholder="Search or jump to..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            onSubmit={handleSubmit}
          />
          <div className="navbar-menu">Pull requests</div>
          <div className="navbar-menu">Issues</div>
          <div className="navbar-menu">Codespaces</div>
          <div className="navbar-menu">Marketplace</div>
          <div className="navbar-menu">Explore</div>
        </div>
        <div className="d-flex align-items-center justify-content-end gap-3">
          <div className="navbar-menu">
            <IoMdNotificationsOutline size={20} />
          </div>
          <AddRepoDropdown />
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
