import Link from "next/link";
import ITip from "../../interfaces/ITip";
import SubjectsList from "../subjects/SubjectsList";

interface TipCardProps {
  tip: ITip;
}

export default function TipCard(props: TipCardProps ) {
  const { id, title, author, createdAt, subjects } = props.tip;

  return (
    <Link href={`/tip/${id}`}>
      <article
        className={`
        bg-neutral-500 hover:bg-neutral-600
          rounded-md p-4 text-neutral-300 m-2
        `}
      >
        <div className="flex justify-between text-sm">
          <span>{createdAt}</span>
          <Link href={`/user/${author.id}`}>
            <a>{author.name}</a>  
          </Link>
        </div>

        <h3 className="text-xl text-yellow-500 font-bold my-2">{title}</h3>

        <SubjectsList subjects={subjects}/>
      </article>
    </Link>
  );
}
