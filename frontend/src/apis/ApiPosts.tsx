import type { PostType } from "../types/PostType";
import FotoPerfil from "../assets/imagens/fotoPefilTeste.jpg";

export const ApiPosts = async (): Promise<PostType[]> => {
  try {
    const response = await fetch("http://localhost:3000/forum", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const backendData = await response.json();

    const mappedPosts: PostType[] = backendData.map((post: any, index: number) => ({
      index: String(index + 1),
      nomeUsuario: "Usuário 123", 
      tituloPostagem: post.title,
      localizacaoPostagem: post.adress, 
      contadorVotoPositivo: Math.floor(Math.random() * 100), 
      contadorVotoNegativo: Math.floor(Math.random() * 10), 
      contadorComentarios: Math.floor(Math.random() * 50),  
      fotoUsuario: FotoPerfil, 
      fotoPostagem: post.image,
      commentarios: [ 
        {
          fotoUsuario: FotoPerfil,
          nomeUsuario: "Renan Tonon",
          commentario: "Comentário mockado aqui!"
        }
      ]
    }));

    return mappedPosts;

  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
};
