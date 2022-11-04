import { useRouter } from "next/router";
import { useState } from "react";

import ISubject from "../../interfaces/ISubject";
import Button from "../template/Button";
import AddSubjects from "../subjects/AddSubjects";
import Label from "components/template/Label";
import { AxiosError } from "axios";
import TipService from "services/TipService";
import ITip from "interfaces/ITip";

export default function CreateTip() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const inputSytle = `bg-neutral-200 py-2 px-4 rounded-md border border-neutral-400`;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const tipService = new TipService();
    const authorId = 1;
    const subjects: ISubject[] = [];
    subjects.push({ name: event.target.subject.value });

    await tipService
      .register({ authorId, title, content })
      .then(async (tip: ITip) => {
        const tipId = tip.id;

        if (subjects.length >= 1) {
          await tipService.addSubjects(tipId, subjects);
        }

        router.push(`/tip/${tipId}`);
      })
      .catch((e: AxiosError) => {
        console.error(e);
      });
  };

  return (
    <form
      className={` text-neutral-800 my-16 space-y-4 `}
      onSubmit={handleSubmit}
    >
      <div>
        <Label htmlFor="title">Título:</Label>
        <input
          required
          type="text"
          name={"title"}
          id={"title"}
          onChange={(e) => setTitle(e.target.value)}
          className={` w-full ` + inputSytle}
        />
      </div>
      <div>
        <Label htmlFor="content">Conteúdo:</Label>
        <textarea
          required
          name="content"
          id="content"
          rows={10}
          onChange={(e) => setContent(e.target.value)}
          className={` w-full ` + inputSytle}
        />
      </div>

      <AddSubjects setSubjects={setSubjects} />

      <div className={`text-right`}>
        <Button type="submit">
          <span className="p-2">Salvar</span>
        </Button>
      </div>
    </form>
  );
}
