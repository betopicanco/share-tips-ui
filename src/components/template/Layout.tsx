import FavoriteSubjects from "components/subjects/FavoriteSubjects";
import { useState } from "react";
import Topbar from "./Topbar";

interface LayoutProps{
  children: JSX.Element | JSX.Element[]
}

export default function Layout({children}: LayoutProps) {
  const [showSelectSubjects, setShowSelectSubjects] = useState(true);

  return (
    <div className={`bg-white min-h-screen`}>
      <Topbar/>
      
      {showSelectSubjects && <FavoriteSubjects close={() => setShowSelectSubjects(false)}/>}
      <div className="flex justify-center">
        <div className="md:w-3/4">
          {children}
        </div>
      </div>
    </div>
  );
}
