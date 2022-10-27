interface ILabel {
  htmlFor: string;
  children: string;
}
export default function Label({ children, htmlFor }: ILabel) {
  return (
    <label htmlFor={htmlFor} className={`font-bold mx-4 text-lg`}>
      {children}
    </label>
  );
}
