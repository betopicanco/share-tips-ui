import Topbar from "./Topbar";

interface ILayout{
  children: JSX.Element | JSX.Element[]
}

export default function Layout({children}: ILayout) {
  return (
    <div>
      <Topbar/>
      <div className="flex justify-center">
        <div className="md:w-3/4">
          {children}
        </div>
      </div>
    </div>
  );
}
