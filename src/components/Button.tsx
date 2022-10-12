interface ButtonProps {
  type: 'button' | 'submit',
  children: JSX.Element;
}

export default function Button({ children, type }: ButtonProps) {
  return (
    <button type={type} className="bg-orange-400 text-white text-center">
      <span className="m-2">{children}</span>
    </button>
  );
}
