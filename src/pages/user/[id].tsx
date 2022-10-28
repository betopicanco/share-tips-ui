import Layout from "components/template/Layout";
import AuthorPerfil from "components/users/AuthorPerfil";
import { GetServerSidePropsContext } from "next";

import TipsList from "../../components/tips/TipsList";
import IAuthor from "../../interfaces/IAuthor";
import ITip from "../../interfaces/ITip";
import api from "../../services/api";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const user = await api.get(`users/${id}`);
  const tips = await api.get(`tips/find-by-author/${id}`);

  return {
    props: {
      user: user.data,
      tips: tips.data
    }
  }
}

interface UserPageProps {
  user: IAuthor,
  tips: ITip[]
}

// TODO add message if user do not exists
export default function UserPage({user, tips}: UserPageProps) {
  return (
    <Layout>
      <main>
        <AuthorPerfil author={user}/>
        
        <TipsList tips={tips}/>
      </main>
    </Layout>
  );
}
