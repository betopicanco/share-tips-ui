interface InputProps {
  id: string,
  label: string,
  type: 'text' | 'password' | 'email'
  onChange: (e: string) => void
}

export default function Input({id, label, type, onChange}: InputProps) {
  return (
    <div className="text-neutral-600 m-2">
      <label htmlFor="" className="block">{label}</label>
      <input type={type} name={id} id={id} onChange={(e) => onChange(e.target.value)}/>
    </div>
  );
}