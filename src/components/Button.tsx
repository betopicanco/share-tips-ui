interface ButtonProps {
  type: 'button' | 'submit',
  children: JSX.Element | string;
}

export default function Button({ children, type }: ButtonProps) {
  return (
    <button type={type} className={`
      bg-orange-400 text-white text-center p-2 rounded-md hover:bg-orange-500
    `}>
      {children}
    </button>
  );
}
