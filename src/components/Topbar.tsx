import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="bg-neutral-600 text-white flex justify-center">
      <div className="md:w-3/4">
        <Link href={"/"}>
          <span className="flex py-2">
            <Image src={"/img/u2.png"} width={60} height={50} />
            <h1 className="py-4 text-2xl font-bold">ShareTIPS</h1>
          </span>
        </Link>
      </div>
    </header>
  );
}
