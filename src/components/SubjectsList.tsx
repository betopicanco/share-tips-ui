import ISubject from "../interfaces/ISubject";

interface ISubjectList {
  subjects: ISubject[];
}

export default function SubjectsList({ subjects }: ISubjectList) {
  return (
    <div className="overflow-hidden hover:overflow-x-auto pt-6 h-16 text-white">
      {subjects.map((subject) => {
        return (
          <span className="p-2 bg-blue-500 rounded-lg m-1 text-xs text-center">
            {subject.name}
          </span>
        );
      })}
    </div>
  );
}
