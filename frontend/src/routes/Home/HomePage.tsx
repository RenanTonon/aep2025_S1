import { HeaderMenu } from "../../components/PageLoyout/components/HeaderMenu";
import { PageLayout } from "../../components/PageLoyout/PageLayout";
import { PostMansager } from "./components/PostMansager";
import FotoPerfil from "../../assets/imagens/fotoPefilTeste.jpg"
import BananaFoto from "../../assets/imagens/banana teste.jpg"
export const HomePage = () => {
    return (
        <> 
            <HeaderMenu></HeaderMenu>
            <div className="flex justify-center mt-[50px]">
                <PostMansager fotoUsuario={FotoPerfil} nomeUsuario="Willian Kakihata" tituloPostagem="Banana no Mercado teve um desconto alto..." localizacaoPostagem="Avenida bananas 1750" fotoPostagem={BananaFoto} contadorVotoPositivo={1000} contadorVotoNegativo={1} contadorComentarios={10000}/>
            </div>
        </>
        
            
        
    );
}