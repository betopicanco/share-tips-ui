import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Layout from "../../components/Layout";
import api from "../../services/api";

export default function NewTip() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const authorId = 1;

    await api.post('tips/', {
      authorId,
      title,
      content
    }).then(res => {
      router.push(`/tip/${res.data.id}`)
    })
  }

  return (
    <Layout>
      <main>
        <form className="text-neutral-800 my-16 space-y-4" onSubmit={handleSubmit}>
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

          <Button type="submit" content="Salvar"/>
        </form>
      </main>
    </Layout>
  );
}
