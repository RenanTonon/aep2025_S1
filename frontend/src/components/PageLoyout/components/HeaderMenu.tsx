import MenuIcon from '../../../assets/icons/menu.svg'
import ImagePng from '../../../assets/imagens/CITY_VOICE_TALK.png'
import SearchIcon from '../../../assets/icons/search.png'
import { useNavigate } from 'react-router-dom';

export const HeaderMenu = () => {

    const navigate = useNavigate();
  
    const setNavigate = () => {
        navigate(`/login/`);
    };
    return (
        <div className="flex w-full h-[80px] bg-gradient-to-r from-[#332896] to-[#3E31B1] justify-around items-center pt-[10px] pb-[10px]">
            <div className="flex text-white items-center">
                <img src={ImagePng} alt="menu icon" className='w-[300px]'/>
            </div>
            <div className='flex items-center relative '>
                <img src={SearchIcon} alt="search icon" className='h-[27px] absolute inset-y-2.5 left-0 flex items-center pl-3 opacity-80'/>
                <input type="text" placeholder="Busque no City Voice Talk" className='flex border border-solid border-white p-[8px] rounded-[20px] w-[600px] bg-white pl-11 placeholder-gray-600 focus:border-[#332896] outline-none'/>
            </div>
            <div className='flex items-center gap-[20px] text-white'>
                <button className='flex bg-white w-[150px] pt-[8px] pb-[8px] justify-center rounded-[20px] text-[#332896] hover:bg-[#332896] hover:text-white transition-colors duration-300 cursor-pointer' onClick={setNavigate}>ENTRAR</button>
                <MenuIcon />
            </div>
        </div>
    )
}