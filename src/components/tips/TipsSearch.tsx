import ITip from "../../interfaces/ITip";
import api from "../../services/api";
import Button from "../Button";

interface TipsSearchProps {
  setTips: (tips: ITip[]) => void;
}

export default function TipsSearch({ setTips }: TipsSearchProps) {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const term = event.target.term.value;
    const param = event.target.param.value;

    api.get(`/tips/search?param=${param}&term=${term}`).then((res) => {
      const tips: ITip[] = res.data;

      setTips(tips);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`p-2 my-2 flex space-x-4 `}>
      <input
        required
        type={"text"}
        id={"term"}
        name={"term"}
        className={`md:w-1/3 px-2 rounded-md border-2 border-neutral-400`}
      />

      <select
        name="param"
        id="param"
        className={`px-2 rounded-md border-2 border-neutral-400`}
      >
        <option selected value="author">
          Autor
        </option>
        <option value="title">Título</option>
        <option value="content">Conteúdo</option>
        <option value="subject">Assunto</option>
      </select>

      <Button type="submit">Buscar</Button>
    </form>
  );
}
