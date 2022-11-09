interface ButtonProps {
  type?: "button" | "submit";
  children: JSX.Element | string;
  onClick?: () => any;
}

export default function Button({ children, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      bg-orange-400 text-white text-center p-2 rounded-md hover:bg-orange-500
    `}
    >
      {children}
    </button>
  );
}
