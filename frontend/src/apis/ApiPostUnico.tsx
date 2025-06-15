import FotoPerfil from "../assets/imagens/fotoPefilTeste.jpg";
import BananaFoto from "../assets/imagens/banana teste.jpg";
import type { PostType } from "../types/PostType";

export const ApiPostUnico = async (index: string): Promise<PostType | null> => {
  const api: PostType[] = [
    {
      index: "1",
      nomeUsuario: "Willian Kakihata",
      tituloPostagem: "Banana no Mercado teve um desconto alto...",
      localizacaoPostagem: "Avenida bananas 1750",
      contadorVotoPositivo: 1000,
      contadorVotoNegativo: 1,
      contadorComentarios: 10000,
      fotoUsuario: FotoPerfil,
      fotoPostagem: BananaFoto,
      commentarios: [
        {
          fotoUsuario: FotoPerfil,
          nomeUsuario: "Willian Kakihata",
          commentario: "Banana tem no mercado",
        },
        {
          fotoUsuario: FotoPerfil,
          nomeUsuario: "Willian Kakihata",
          commentario: "Sabão no mercado?",
        },
      ],
    },
    {
      index: "2",
      nomeUsuario: "Maria Silva",
      tituloPostagem: "Promoção de morangos frescos!",
      localizacaoPostagem: "Rua das Frutas, 900",
      contadorVotoPositivo: 250,
      contadorVotoNegativo: 3,
      contadorComentarios: 80,
      fotoUsuario: FotoPerfil,
      fotoPostagem: BananaFoto,
      commentarios: [
        {
          fotoUsuario: FotoPerfil,
          nomeUsuario: "Maria Silvaaa",
          commentario: "Banana não tem no mercado",
        },
      ],
    },
  ];

  const resultado = api.find((post) => post.index === index);
  return resultado ?? null;
};
