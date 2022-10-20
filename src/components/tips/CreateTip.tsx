import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ISubject from "../../interfaces/ISubject";
import api from "../../services/api";
import Button from "../Button";
import Label from "../Label";
import AddSubjects from "../subjects/AddSubjects";

export default function CreateTip() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [availableSubjects, setAvailableSubjects] = useState<
    { id: number; name: string }[]
  >([]);
  const inputSytle = `bg-neutral-200 py-2 px-4 rounded-md border border-neutral-400`;

  useEffect(() => {
    api.get("subjects/").then((res) => {
      setAvailableSubjects(res.data);
    });
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const authorId = 1;
    const subjects: ISubject[] = [];
    subjects.push({name: event.target.subject.value });

    await api
      .post("tips/", {
        authorId,
        title,
        content,
      })
      .then(async (res) => {
        const tipId = res.data.id;

        if (subjects.length >= 1) {
          await api.put(`/tips/${tipId}/add-subjects`, subjects);
        }

        router.push(`/tip/${tipId}`);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <form className="text-neutral-800 my-16 space-y-4" onSubmit={handleSubmit}>
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

      <AddSubjects setSubjects={setSubjects}/>

      <div className={`text-right`}>
        <Button type="submit">
          <span className="p-2">Salvar</span>
        </Button>
      </div>
    </form>
  );
}
