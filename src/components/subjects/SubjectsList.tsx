import ISubject from "../../interfaces/ISubject";

interface SubjectListProps {
  subjects: ISubject[];
}

export default function SubjectsList({ subjects }: SubjectListProps) {
  return (
    <div className="overflow-hidden pt-6 text-white flex">
      {subjects.map((subject, i) => {
        return (
          <div>
            <div
              key={i}
              className="p-2 bg-blue-500 rounded-lg m-1 text-xs text-center flex"
            >
              {subject.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
