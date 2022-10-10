import { GetServerSidePropsContext } from "next";
import Layout from "../../components/Layout";
import TipsList from "../../components/TipsList";
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

interface IUserPage {
  user: IAuthor,
  tips: ITip[]
}

export default function UserPage({user, tips}: IUserPage) {
  return (
    <Layout>
      <main>
        <h2>{user.name}</h2>
        <span>{user.email}</span>
        
        <TipsList tips={tips}/>
      </main>
    </Layout>
  );
}
