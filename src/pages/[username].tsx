import { useContext, useEffect } from "react";
import NavbarComponent from "../components/organisms/NavbarComponent";
import Content from "../components/organisms/Content";

import { API } from "../configs/api";
import { AppContext } from "../configs/context";

export default function Home(props: any) {
  const { repoList, userInfo } = props;
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: "SET_USERINFO",
      payload: userInfo,
    });
  }, []);

  return (
    <div>
      <NavbarComponent />

      <Content repoList={repoList} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;

  const responseRepo = await API.get(`/users/${query.username}/repos`, query);
  const responseUser = await API.get(`/users/${query.username}`);

  return {
    props: {
      repoList: responseRepo.data,
      userInfo: responseUser.data,
    },
  };
}
