import TipService from "services/TipService";
import ITip from "../../interfaces/ITip";
import Button from "../template/Button";

interface TipsSearchProps {
  setTips: (tips: ITip[]) => void;
}

export default function TipsSearch({ setTips }: TipsSearchProps) {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const param = event.target.param.value;
    const term = event.target.term.value;

    if(typeof term === 'string' && typeof param === 'string') {
      const tipService = new TipService();
      const tips = await tipService.searchByParamAndTerm(param, term);

      setTips(tips);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`p-2 my-2 flex space-x-4 `}>
      <input
        type={"text"}
        id={"term"}
        name={"term"}
        className={`md:w-1/3 px-2 rounded-md border-2 border-neutral-400`}
      />

      <select
        defaultValue={"author"}
        name="param"
        id="param"
        className={`px-2 rounded-md border-2 border-neutral-400`}
      >
        <option value="author">
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
