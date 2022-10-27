import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function Topbar() {
  return (
    <header className="bg-neutral-600 text-white flex justify-center">
      <div className="md:w-3/4 flex space-between">
        <div className="w-full flex space-between">
          <Link href={"/"}>
            <span className="flex py-2">
              <Image src={"/img/u2.png"} alt={"icon"} width={60} height={50} />
              <h1 className="py-4 text-2xl font-bold">ShareTIPS</h1>
            </span>
          </Link>
          <div className="my-auto mx-4 flex space-x-2">
            <div>
              <Button type="button">
                <Link href={`/tip/new`}>
                  <span className="px-2 py-4">Nova dica</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="my-auto">
          <Button type="button">
            <HamburgerIcon style="w-6 h-6 stroke-2"/>
          </Button>
        </div>
      </div>
    </header>
  );
}
