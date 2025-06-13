import MenuIcon from '../../../assets/icons/menu.svg'
import NavigateButton from '../../buttons/NavigateButton'
export const HeaderMenu = () => {
    return (
        <div className="flex w-full h-[60px] bg-blue-500 justify-around items-center">
            <div className="flex text-white items-center gap-[10px]">
                <MenuIcon />
                <p>Home</p>
            </div>
            <div className='flex items-center absolute'>
                <img src="" alt="" />
                <div className=' left-45 top-0'>
                    <MenuIcon />
                </div>
                <input type="text" placeholder="Busque no City Voice Talk" className='flex border border-solid border-white p-[8px] rounded-[15px] w-[1000px] bg-white relative'/>
            </div>

            <div className='flex items-center gap-[10px]'>
                <button>ENTRAR</button>
                <img src="" alt="" />
            </div>
        </div>
    )
}