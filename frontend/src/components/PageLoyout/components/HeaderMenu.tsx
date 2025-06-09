import MenuIcon from '../../../assets/icons/menu.svg'
export const HeaderMenu = () => {
    return (
        <div className="flex flex-col">
            <div className="flex text-white">
                <div className="flex text-white w-[5px] h-[5px]">
                    <MenuIcon/>
                </div>
                <p>Home</p>
            </div>
            <div>
                <img src="" alt="" />
                <input type="text" placeholder="Busque no City Voice Talk"/>
            </div>
                
            <div>
                <button>ENTRAR</button>
                <img src="" alt="" />
            </div>
        </div>
    )
}