import IAuthor from "interfaces/IAuthor";

interface AuthorPerfilProps {
  author: IAuthor;
}

export default function AuthorPerfil({ author }: AuthorPerfilProps) {
  const { name, email, profession } = author;

  return (
    <div>
      <h2>{name}</h2>
      <span>{email}</span>
      <span>profession</span>
    </div>
  );
}
