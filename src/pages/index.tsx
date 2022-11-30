import { useContext, useEffect, useState } from "react";
import Layout from "components/template/Layout";
import TipsSearch from "components/tips/TipsSearch";
import TipsList from "components/tips/TipsList";
import TipService from "services/TipService";
import ITip from "interfaces/ITip";
import AuthContext from "context/AuthContext";
import  router  from 'next/router';
import useAuth from "hooks/useAuth";
import { off } from "process";

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
  const [user, setUser] = useState<any>();
  const { getUser } = useAuth();
  
  useEffect(() => {
    getUser().then((user) => {
      if(!user.isLogged) {
        router.push('/login')
      } else {
        setUser(user);
      }
    })

    console.log('aqui');
  });

  return (
    <Layout>
      <TipsSearch setTips={setTips}/>
      <TipsList tips={tips}/>
    </Layout>
  );
}
