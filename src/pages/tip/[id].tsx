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
  const { title, content, subjects, createdAt, author } = tip;

  return (
    <Layout>
      <main>
        <article className="my-4">
          <h2 className="text-3xl text-yellow-500 my-4">{title}</h2>

          <div className="text-neutral-400 flex justify-between w-full">
            <span>{createdAt}</span>

            <span>{author.name}</span>
          </div>

          <div className="mt-2 indent-4">{content}</div>

          <SubjectsList subjects={subjects} />
        </article>
      </main>
    </Layout>
  );
}
