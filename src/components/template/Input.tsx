import Label from "./Label";

interface InputProps {
  id: string;
  label: string;
  type: "text" | "password" | "email" | undefined;
  onChange: (e: string) => void;
}

export default function Input({
  id,
  label,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div className="text-neutral-600 m-2">
      {label && <Label htmlFor="id">{label}</Label>}

      <input
        type={type}
        name={id}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        className={`
          bg-neutral-200 py-2 px-4 
          border border-neutral-400 rounded-md 
          w-full
        `}
      />
    </div>
  );
}
