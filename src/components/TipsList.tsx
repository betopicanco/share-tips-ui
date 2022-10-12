import ITip from "../interfaces/ITip";
import TipCard from "./TipCard";

interface TipsListProps {
  tips: ITip[];
}

export default function TipsList({ tips }: TipsListProps) {
  return (
    <div className="grid grid-cols-3 my-4">
      {tips.map((tip) => {
        return <TipCard tip={tip} />;
      })}
    </div>
  );
}
