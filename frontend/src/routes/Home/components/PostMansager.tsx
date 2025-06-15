import RowTopIcon from "../../../assets/icons/row-top.png"
import RowDownIcon from "../../../assets/icons/row-down.png"
import CommentIcon from "../../../assets/icons/comment.png"
import CompartilharIcon from "../../../assets/icons/compartilhar.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


interface Props {
    idPostagem:string
    fotoUsuario : string
    nomeUsuario : string
    tituloPostagem : string
    localizacaoPostagem : string
    fotoPostagem : string
    contadorVotoPositivo : number
    contadorVotoNegativo : number
    contadorComentarios : number
}

export const PostMansager = (props:Props) => {

    const [votosNegativos, setVotosNegativos] = useState(props.contadorVotoNegativo);
    const [votosPositivos, setVotosPositivos] = useState(props.contadorVotoPositivo);

    const incrementaVotosNegativos = () => {
        setVotosNegativos(votosNegativos + 1);
    };

    const incrementaVotosPositivos = () => {
        setVotosPositivos(votosPositivos + 1);
    };

    const navigate = useNavigate();
  
    const setNavigate = () => {
        navigate(`/comentarios/${props.idPostagem}`);
    };

    return (
        <div className="flex flex-col w-[600px] border-solid border-black gap-[10px] font-poppins justify-center">
            <div className="flex flex-row items-center gap-[10px]">
                <img src={props.fotoUsuario} alt="foto usuário" className="w-[30px] rounded-[180px]"/>
                <p className="font-bold">{props.nomeUsuario}</p>
            </div>
            <div className="">
                <p className="text-[20px] text-start font-poppins">{props.tituloPostagem}</p>
                <p className="text-[12px] text-end">{props.localizacaoPostagem}</p>
                <div className="flex bg-gray-200 justify-center border border-solid rounded-[15px]">
                    <img src={props.fotoPostagem} alt="foto da postagem" className="h-[300px]" />
                </div>
                <div className="flex flex-row gap-[50px] p-[10px]">
                    <div className="flex flex-row gap-[10px] bg-gray-200 p-[10px] rounded-[20px] w-[150px] justify-around ">
                        <div className="flex flex-row gap-[10px] items-center">
                            <img src={RowTopIcon} alt="Row Top icon" className="w-[15px] h-[15px] cursor-pointer" onClick={incrementaVotosPositivos} />
                            <p className="font-bold text-[12px]">{votosPositivos}</p>
                        </div>
                        <div className="flex flex-row gap-[10px] items-center" >
                            <img src={RowDownIcon} alt="Row Down icon" className="w-[15px] h-[15px] cursor-pointer" onClick={incrementaVotosNegativos}/>
                            <p className="font-bold text-[12px]">{votosNegativos}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] bg-gray-200 pl-[20px] pr-[20px] rounded-[20px] items-center" onClick={setNavigate}>
                        <img src={CommentIcon} alt="Comment icon" className="w-[15px] h-[15px] cursor-pointer"/>
                        <p className="font-bold text-[12px]">{props.contadorComentarios}</p>
                    </div>
                    <div className="flex flex-row gap-[10px] bg-gray-200 pl-[20px] pr-[20px] rounded-[20px] items-center" >
                        <img src={CompartilharIcon} alt="compartilhar icon" className="w-[15px] h-[15px] cursor-pointer"/>
                        <p className="font-bold text-[12px]">Compartilhar</p>
                    </div>
                </div>
            </div>
        </div>
    )


}