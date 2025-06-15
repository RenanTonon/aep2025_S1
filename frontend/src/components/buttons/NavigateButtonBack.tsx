import { useNavigate } from "react-router-dom";


interface Props {
    conteudo:string
    path: string
}


const NavigateButtonBack = (props:Props) => {
  const navigate = useNavigate();
  
    const setNavigate = () => {
        navigate(props.path);
    };
  
  return (
    <button onClick={setNavigate} className="bg-gradient-to-b from-[#3a2e8c] to-[#1a1440] text-white border-none rounded-lg py-3 px-10 font-bold cursor-pointer  transition-colors duration-200 w-[200px]">{props.conteudo}</button>
  )

}

export default NavigateButtonBack;