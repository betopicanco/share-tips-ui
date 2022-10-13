import Topbar from "./Topbar";

interface LayoutProps{
  children: JSX.Element | JSX.Element[]
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className={`bg-white min-h-screen`}>
      <Topbar/>
      <div className="flex justify-center">
        <div className="md:w-3/4">
          {children}
        </div>
      </div>
    </div>
  );
}
