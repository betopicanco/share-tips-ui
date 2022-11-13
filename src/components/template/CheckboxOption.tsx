import { useState } from "react";

interface CheckboxOptionProps {
  option: ICheckboxOption;
}

export interface ICheckboxOption {
  id: string;
  value: string | JSX.Element;
}

export default function CheckboxOption({ option }: CheckboxOptionProps) {
  const { id, value } = option;
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className={`p-2`}>
      <input type="checkbox" name={id} id={id} />
      <label>
        {value}
      </label>
    </div>
  );
}
