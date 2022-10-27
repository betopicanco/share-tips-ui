import { useEffect, useState } from "react";
import ISubject from "../../interfaces/ISubject";
import api from "../../services/api";
import CheckBox from "../Checkbox";
import { ICheckboxOption } from "../CheckboxOption";



export default function FavoriteSubjects() {
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [options, setOptions] = useState<ICheckboxOption[]>([]);

  // useEffect(() => {
  //   api.get(`subjects/most-popular`).then((response) => {
  //     const popularSubjects: ISubject[] = response.data;

  //     setSubjects(popularSubjects);
  //   })
  // }, [subjects]);

  // useEffect(() => {
  //   const popularSubjects = [
  //     { name: "JAVA" },
  //     { name: "PHP" },
  //     { name: "Javascript" },
  //     { name: "C++" },
  //   ];

  //   setSubjects(popularSubjects);

  //   const options = subjects.map((subject) => {
  //     return {
  //       id: subject.name,
  //       value: subject.name,
  //     };
  //   });

  //   setOptions(options);
  // }, [setSubjects,setOptions, subjects]);

  

  return (
    <form action="">
      <CheckBox options={options} />
    </form>
  );
}
