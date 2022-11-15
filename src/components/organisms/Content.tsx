import React, { FC } from "react";
import ProfileSidebar from "../molecules/ProfileSidebar";
import RepoList from "../molecules/RepoList";

interface Props {
  repoList: object[] | [];
}

const Content: FC<Props> = ({ repoList }) => {
  return (
    <div className="container-fluid content-bg">
      <div className="container pt-5">
        <div className="row">
          <div className="col-3">
            <ProfileSidebar />
          </div>
          <div className="col-9">
            <RepoList repoList={repoList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
