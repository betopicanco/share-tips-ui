import { useContext, useState } from "react";
import Layout from "components/template/Layout";
import TipsSearch from "components/tips/TipsSearch";
import TipsList from "components/tips/TipsList";
import TipService from "services/TipService";
import ITip from "interfaces/ITip";
import AuthContext from "context/AuthContext";
import  router  from 'next/router';

export async function getServerSideProps() {
  const tipService = new TipService();
  const tips = await tipService.findAll();

  return {
    props: {
      tips: tips,
    },
  };
}

interface IndexProps {
  tips: ITip[];
}

export default function Index(props: IndexProps) {
  const [tips, setTips] = useState<ITip[]>(props.tips);
  const {userLogged} = useContext(AuthContext);
  
  // if(!userLogged) router.push('/login');


  return (
    <Layout>
      <TipsSearch setTips={setTips}/>
      <TipsList tips={tips}/>
    </Layout>
  );
}
