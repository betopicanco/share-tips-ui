import { useEffect, useState } from "react";
import ISubject from "../../interfaces/ISubject";
import api from "../../services/api";
import Button from "../template/Button";
import Label from "../Label";

interface AddSubjectsProps {
  setSubjects: (subjects: ISubject[]) => void;
}

export default function AddSubjects({ setSubjects }: AddSubjectsProps) {
  const [availableSubjects, setAvailableSubjects] = useState<ISubject[]>([]);

  useEffect(() => {
    api.get("subjects/").then((res) => {
      setAvailableSubjects(res.data);
    });
  });

  return (
    <div>
      <Label htmlFor="subject">Assuntos: </Label>

      <input
        id={"subject"}
        list="subjects"
        className={`
            w-xl mr-2 rounded-md bg-neutral-200 py-2 px-4 border border-neutral-400
          `}
      />
      <datalist id={"subjects"}>
        {availableSubjects.map((availableSubject, i) => {
          return (
            <option key={i} value={availableSubject.name}>
              {availableSubject.name}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}
