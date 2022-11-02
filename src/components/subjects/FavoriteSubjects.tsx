import { useEffect, useState } from "react";
import api from "../../services/api";
import { ICheckboxOption } from "components/template/CheckboxOption";
import ISubject from "../../interfaces/ISubject";
import SubjectService from "services/SubjectService";

export async function getServerSideProps() {
  const service = new SubjectService();
  const availableSubjects = service.findAll();

  return {
    props: {
      availableSubjects,
    }
  }
}

export default function FavoriteSubjects() {
  const [availableSubjects, setAvailableSubjects] = useState<ISubject[]>([]);
  const [options, setOptions] = useState<ICheckboxOption[]>([]);

  useEffect(() => {
    api.get("subjects/").then((res) => {
      setAvailableSubjects(res.data);
    });
  });

  console.log(availableSubjects);

  return <form action="">{/* <CheckBox options={options} /> */}</form>;
}
