import ITip from "../interfaces/ITip";
import TipCard from "./TipCard";

interface ITipsList {
  tips: ITip[]
}

export default function TipsList({tips}: ITipsList) {
  return (
    <div className="grid grid-cols-3 my-4">
      {tips.map((tip) => {
        const {id, title, content, author, createdAt, subjects} = tip;

        return (
          <TipCard
            id={id}
            title={title}
            content={content}
            author={author}
            createdAt={createdAt}
            subjects={subjects}
          />
        );
      })}
    </div>
  )
}
