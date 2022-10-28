import Layout from "components/template/Layout";
import TipArticle from "components/tips/TipArticle";
import { GetServerSidePropsContext } from "next";

import ITip from "../../interfaces/ITip";
import api from "../../services/api";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const res = await api.get(`/tips/${id}`);

  return {
    props: {
      tip: res.data,
    },
  };
}

interface TipPageProps {
  tip: ITip;
}

export default function TipPage({ tip }: TipPageProps) {
  return (
    <Layout>
      <main>
        <TipArticle tip={tip} />
      </main>
    </Layout>
  );
}
