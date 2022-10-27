import CheckboxOption, { ICheckboxOption } from "./CheckboxOption";

interface CheckBoxProps {
  options: ICheckboxOption[];
}

export default function CheckBox({ options }: CheckBoxProps) {
  return (
    <div className="w-full grid">
      {options.map((option, i) => {
        return (
          <div key={i}>
            <CheckboxOption option={option} key={i} />
          </div>
        );
      })}
    </div>
  );
}
