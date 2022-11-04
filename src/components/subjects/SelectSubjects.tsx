import { useEffect, useState } from "react";
import api from "../../services/api";
import { ICheckboxOption } from "components/template/CheckboxOption";
import ISubject from "../../interfaces/ISubject";
import SubjectService from "services/SubjectService";
import CheckBox from "components/template/Checkbox";

interface SelectSubjectProps {
  availableSubjects: ISubject[];
}

export default function SelectSubjects() {
  const [options, setOptions] = useState<ICheckboxOption[]>([]);

  useEffect(() => {
    const subjectService = new SubjectService();
    subjectService.findAll().then((subjects) => {
      const subs = subjects.map((subject) => {
        return {
          id: subject.name,
          value: subject.name,
        };
      });

      setOptions(subs);
    });
  }, [setOptions]);

  return( <form action="" className="text-neutral-800">
    <CheckBox options={options} />
  </form>);
}
