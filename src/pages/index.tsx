import Layout from "../components/Layout";
import TipCard from "../components/TipCard";
import TipsList from "../components/TipsList";
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

interface IndexProps {
  tips: ITip[];
}

export default function Index({ tips }: IndexProps) {
  return (
    <Layout>
      <TipsList tips={tips}/>
    </Layout>
  );
}
