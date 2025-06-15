import { useNavigate } from "react-router";

interface Props {
  conteudo: string;
  path: string;
  className?: string; 
}

const NavigateButton = ({ conteudo, path, className }: Props) => {
  const navigate = useNavigate();

  const setNavigate = () => {
    navigate(path);
  };

  const defaultStyle = "bg-gradient-to-b from-[#3a2e8c] to-[#1a1440] text-white border-none rounded-lg py-3 px-10 font-bold cursor-pointer transition-colors duration-200 w-[200px]";

  return (
    <button
      onClick={setNavigate}
      className={className ? className : defaultStyle} 
    >
      {conteudo}
    </button>
  );
};

export default NavigateButton;
