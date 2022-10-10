import { GetServerSidePropsContext } from "next";
import Layout from "../../components/Layout";
import SubjectsList from "../../components/SubjectsList";
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

interface ITipPage {
  tip: ITip;
}

export default function TipPage({ tip }: ITipPage) {
  const { title, content, subjects } = tip;

  return (
    <Layout>
      <main>
        <article>
          <h2>{title}</h2>
          <div>{content}</div>
          
          <SubjectsList subjects={subjects}/>
        </article>
      </main>
    </Layout>
  );
}
