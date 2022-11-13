import { useState, MouseEvent } from "react";
import ISubject from "interfaces/ISubject";

interface subjectOption extends ISubject {
  isChecked: boolean;
}

export default function SelectSubjects() {
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState<subjectOption[]>([
    { name: "HTML", isChecked: false },
    { name: "CSS", isChecked: false },
    { name: "JS", isChecked: false },
    { name: "PHP", isChecked: false },
    { name: "BACKEND", isChecked: false },
    { name: "FRONTEND", isChecked: false },
  ]);

  const handleClick = () => setIsOpen(!isOpen);

  const handleChange = (e: MouseEvent<HTMLInputElement>, subject: string) => {
    const subjectsCopy = [...subjects];
    const foundSubject = subjects?.find((s) => s.name === subject);

    if (!foundSubject) {
      return;
    }

    foundSubject.isChecked = e.currentTarget.checked;
    setSubjects(subjectsCopy);
  };

  let optionsStyle = ` w-56 border-x-2 border-x-orange-400 border-b-2 border-b-orange-400 `;
  if(!isOpen) optionsStyle += ` hidden `;

  return (
    <div className={`text-neutral-800`}>
      <button
        onClick={handleClick}
        className={`
          bg-neutral-600 text-white 
          px-4 py-2 w-56
          border-2 border-orange-400 rounded-md 
        `}
      >
        {subjects.some((s) => s.isChecked) ? (
          subjects
            .filter((s) => s.isChecked)
            .map((s, i) => (
              <span key={s.name}>
                {i !== 0 && ", "}
                {s.name}
              </span>
            ))
        ) : (
          <span>Selecione</span>
        )}
      </button>

      <div className={optionsStyle}>
          {subjects.map((subject) => (
            <label key={subject.name} 
              className={` 
                block px-4 py-2 text-orange-400 font-bold 
              `}>
              <input
                type="checkbox"
                onClick={(e: MouseEvent<HTMLInputElement>) =>
                  handleChange(e, subject.name)
                }
                className={`mr-2`}
              />

              <span>{subject.name}</span>
            </label>
          ))}
        </div>
    </div>
  );
}
