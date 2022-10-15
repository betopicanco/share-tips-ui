import ISubject from "../../interfaces/ISubject";

interface SubjectListProps {
  subjects: ISubject[];
}

export default function SubjectsList({ subjects }: SubjectListProps) {
  return (
    <div className="overflow-hidden hover:overflow-x-auto pt-6 h-16 text-white">
      {subjects.map((subject, i) => {
        return (
          <span key={i} className="p-2 bg-blue-500 rounded-lg m-1 text-xs text-center">
            {subject.name}
          </span>
        );
      })}
    </div>
  );
}
