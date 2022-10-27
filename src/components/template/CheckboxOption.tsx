interface CheckboxOptionProps {
  option: ICheckboxOption,
}

export interface ICheckboxOption {
  id: string,
  value: string | JSX.Element
}

export default function CheckboxOption({option}: CheckboxOptionProps) {
  const {id, value} = option;

  return (
    <div>
      <input type="checkbox" name={id} id={id} /> 
    </div>
  )
}