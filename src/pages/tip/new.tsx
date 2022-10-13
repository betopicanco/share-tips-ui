import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Layout from "../../components/Layout";
import api from "../../services/api";

export default function NewTip() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [subject, setSubject] = useState<string>('');
  const [
    availableSubjects, 
    setAvailableSubjects
  ] = useState<{ id: number; name: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    api.get("subjects/").then((res) => {
      setAvailableSubjects(res.data);
    });
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const authorId = 1;
    const subject = event.target.subject.value;

    await api
      .post("tips/", {
        authorId,
        title,
        content,
      })
      .then(async (res) => {
        const tipId = res.data.id;

        if(subject) {
          await api.put(`/tips/${tipId}/add-subject`, {
            name: subject
          })
        }

        router.push(`/tip/${tipId}`);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Layout>
      <main>
        <form
          className="text-neutral-800 my-16 space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <Label htmlFor="title">Título:</Label>
            <input
              type="text"
              name={"title"}
              id={"title"}
              onChange={(e) => setTitle(e.target.value)}
              className={`
                w-full bg-neutral-200 py-2 px-4 rounded-md border border-neutral-400
              `}
            />
          </div>
          <div>
            <Label htmlFor="content">Conteúdo:</Label>
            <textarea
              name="content"
              id="content"
              rows={10}
              onChange={(e) => setContent(e.target.value)}
              className={`
                w-full bg-neutral-200 py-2 px-4 rounded-md border border-neutral-400
              `}
            />
          </div>

          <div>
            <Label htmlFor="subject">Assuntos: </Label>
            <input id={"subject"} list="subjects" className={`w-32 bg-neutral-200 py-2 px-4`}/>
            <datalist id={"subjects"} 
              >
              {availableSubjects.map((availableSubject, i) => {
                return (
                  <option key={i} value={availableSubject.name}>
                    {availableSubject.name}
                  </option>
                );
              })}
            </datalist>
          </div>

          <Button type="submit">
            <span>Salvar</span>
          </Button>
        </form>
      </main>
    </Layout>
  );
}
