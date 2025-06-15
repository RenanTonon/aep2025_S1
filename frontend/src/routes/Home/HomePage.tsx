import { HeaderMenu } from "../../components/PageLoyout/components/HeaderMenu";
import { PostMansager } from "./components/PostMansager";
import NavigateButton from "../../components/buttons/NavigateButton";
import { ApiPosts } from "../../apis/ApiPosts";
import { useEffect, useState } from "react";
import type { PostType } from "../../types/PostType";

export const HomePage = () => {
  const [apiPostagens, setApiPostagens] = useState<PostType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await ApiPosts();
        setApiPostagens(posts);
      } catch (error) {
        console.error("Erro ao carregar postagens:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <HeaderMenu />
      <div className="flex flex-col justify-center items-center mt-[50px] gap-[50px]">
        {apiPostagens.map((post, index) => (
          <PostMansager
            key={index}
            idPostagem={post.idPostagem}
            fotoUsuario={post.fotoUsuario}
            nomeUsuario={post.nomeUsuario}
            tituloPostagem={post.tituloPostagem}
            localizacaoPostagem={post.localizacaoPostagem}
            fotoPostagem={post.fotoPostagem}
            contadorVotoPositivo={post.contadorVotoPositivo}
            contadorVotoNegativo={post.contadorVotoNegativo}
            contadorComentarios={post.contadorComentarios}
          />
        ))}
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <NavigateButton conteudo="POSTAR" path="/postagem" />
      </div>
    </>
  );
};
