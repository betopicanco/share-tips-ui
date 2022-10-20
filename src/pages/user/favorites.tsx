import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import Layout from "../../components/Layout";
import ISubject from "../../interfaces/ISubject";

export async function getServerSideProps(context: GetServerSidePropsContext) {

}

export default function AddFavoriteSuject() {
  const [availableSubject, setAvailableSubjects] = useState<ISubject[]>([]);

  return (
    <Layout>
      <main className={`w-full flex justify-center`}>
        <div
          className={`w-2/3 p-4 my-16 border-2 border-neutral-400 rounded-md`}
        >
          <form action="" className={`grid space-y-2`}>
            <div>
              <input name="" id="" />

              <datalist>

              </datalist>
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at
              sint iusto provident voluptatum accusamus sunt, nesciunt eos
              illum, dolores ratione. At enim modi ab voluptatem ipsa expedita
              eum vel.
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}
