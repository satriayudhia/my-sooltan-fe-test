import React, { FC, useState } from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import Input from "../atoms/Input";
import { useRouter } from "next/router";
import { API } from "../../configs/api";

interface Props {
  repoList: object[];
}

const RepoList: FC<Props> = ({ repoList }) => {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState(repoList);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getRepoList = async () => {
    try {
      let response;
      if (search === "") {
        response = await API.get(`/users/${router.query.username}/repos`);
        setRepos(response.data);
      } else {
        response = await API.get(
          `/search/repositories?q=repo:${router.query.username}/${search}+sort:updated+`
        );
        setRepos(response.data.items);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = () => {
    getRepoList();
  };

  return (
    <div>
      <div className="tab-menu gap-2">
        <RiGitRepositoryLine /> <div>Repository</div>{" "}
        {repos && <div className="repo-total">{repos.length}</div>}
      </div>

      <div className="active-tab" />

      <hr className="mt-0 mb-3" />

      <div className="d-flex align-items-center justify-content-between">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            type="text"
            placeholder="Find a repository..."
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            onSubmit={handleSubmit}
          />
        </form>
      </div>

      <hr className="mt-3 mb-4" />

      {repos &&
        repos.map((repo: any) => (
          <div key={repo.id}>
            <div className="repo-list">
              <div className="title-container gap-2">
                <h3
                  className="repo-title"
                  onClick={() => window.open(repo.html_url)}
                >
                  {repo.name}
                </h3>
                <div className="repo-label">Public</div>
              </div>

              <div className="mt-2">{repo.description}</div>

              <div className="repo-status gap-2 mt-3">
                <div>{repo.language}</div>
                <div>Updated {repo.updated_at}</div>
              </div>
            </div>

            <hr className="mt-4" />
          </div>
        ))}
    </div>
  );
};

export default RepoList;
