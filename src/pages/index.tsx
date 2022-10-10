import Layout from "../components/Layout";
import TipCard from "../components/TipCard";
import ITip from "../interfaces/ITip";
import api from "../services/api";

export async function getServerSideProps() {
  const res = await api.get("tips/");

  return {
    props: {
      tips: res.data,
    },
  };
}

interface IIndex {
  tips: ITip[];
}

export default function Index({ tips }: IIndex) {
  return (
    <Layout>
      <div className="grid grid-cols-3 my-4">
        {tips.map((tip) => {
          const {id, title, content, author, createdAt, subjects} = tip;

          return (
            <TipCard
              id={id}
              title={title}
              content={content}
              author={author}
              createdAt={createdAt}
              subjects={subjects}
            />
          );
        })}
      </div>
    </Layout>
  );
}
