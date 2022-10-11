interface ButtonProps {
  type: 'button' | 'submit',
  content: string;
}
export default function Button({ content, type }: ButtonProps) {
  return (
    <button type={type} className="bg-orange-400 text-white text-center">
      <span className="m-2">{content}</span>
    </button>
  );
}
