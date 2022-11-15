import NavbarComponent from "../components/organisms/NavbarComponent";
import Content from "../components/organisms/Content";

import { API } from "../configs/api";

export default function Home(props: any) {
  const { repoList } = props;

  return (
    <div>
      <NavbarComponent />

      <Content repoList={repoList} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;

  const response = await API.get(`/users/${query.username}/repos`, query);

  return {
    props: {
      repoList: response.data,
    },
  };
}
