import Layout from "components/template/Layout";
import TipArticle from "components/tips/TipArticle";
import { GetServerSidePropsContext } from "next";
import TipService from "services/TipService";

import ITip from "../../interfaces/ITip";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const tipService = new TipService();
  let tip;

  if(typeof id === 'string') tip = await tipService.findById(id);

  return {
    props: {
      tip: tip,
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
