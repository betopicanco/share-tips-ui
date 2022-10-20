import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import CreateTip from "../../components/tips/CreateTip";
import api from "../../services/api";

export default function NewTip() {

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
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
        <CreateTip />
      </main>
    </Layout>
  );
}
