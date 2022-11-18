import Layout from "components/template/Layout";
import AuthorPerfil from "components/users/AuthorPerfil";
import { GetServerSidePropsContext } from "next";
import TipService from "services/TipService";
import UserService from "services/UserService";

import TipsList from "../../components/tips/TipsList";
import IAuthor from "../../interfaces/user/IAuthor";
import ITip from "../../interfaces/ITip";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const userService = new UserService();
  const tipService = new TipService();

  let user;
  let tips;

  if (typeof id === "string") {
    user = await userService.findById(id);
    tips = await tipService.findByAuthor(id);
  }

  return {
    props: {
      user,
      tips,
    },
  };
}

interface UserPageProps {
  user: IAuthor;
  tips: ITip[];
}

// TODO add message if user do not exists
export default function UserPage({ user, tips }: UserPageProps) {
  return (
    <Layout>
      <main>
        <AuthorPerfil author={user} />

        <TipsList tips={tips} />
      </main>
    </Layout>
  );
}
