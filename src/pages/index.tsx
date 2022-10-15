import { useState } from "react";
import Layout from "../components/Layout";
import TipsList from "../components/tips/TipsList";
import TipsSearch from "../components/tips/TipsSearch";
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

export default function Index(props: IndexProps) {
  const [tips, setTips] = useState<ITip[]>(props.tips);

  return (
    <Layout>
      <TipsSearch setTips={setTips}/>
      <TipsList tips={tips}/>
    </Layout>
  );
}
