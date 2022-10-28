import SubjectsList from "components/subjects/SubjectsList";
import ITip from "interfaces/ITip";
import Link from "next/link";

interface TipArticleProps {
  tip: ITip;
}

export default function TipArticle({ tip }: TipArticleProps) {
  const { id, title, content, subjects, createdAt, author } = tip;

  return (
    <article className="my-4">
      <h2 className="text-3xl text-yellow-500 my-4">{title}</h2>

      <div className="text-neutral-400 flex justify-between w-full">
        <span>{createdAt}</span>

        <Link href={`/user/${id}`}>
          <span>{author.name}</span>
        </Link>
      </div>

      <div className="mt-2 indent-4 text-neutral-500">{content}</div>

      <SubjectsList subjects={subjects} />
    </article>
  );
}
