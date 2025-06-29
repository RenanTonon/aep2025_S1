import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { PostType } from "../../types/PostType";
import { ApiPostUnico } from "../../apis/ApiPostUnico";
import { HeaderMenu } from "../../components/PageLoyout/components/HeaderMenu";
import { PostMansager } from "../Home/components/PostMansager";
import NavigateButton from "../../components/buttons/NavigateButton";
import { ApiAddComentario } from "../../apis/ApiAddComentario";


export const CommentPage = () => {
  const [apiPostUnico, setApiPostUnico] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");


  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          const post = await ApiPostUnico(id);
          setApiPostUnico(post);
        }
      } catch (error) {
        console.error("Erro ao carregar postagem:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <div>Carregando postagem...</div>;

  if (!apiPostUnico) return <div>Postagem não encontrada.</div>;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await ApiAddComentario(id!, comment);
   
    
    if (id) {
      const post = await ApiPostUnico(id);
      setApiPostUnico(post);
    }
    setComment(""); 
  } catch (error) {
    console.error("Erro ao adicionar comentário:", error);
  }
};

return (
  <>
    <HeaderMenu />
    <div className="flex flex-row justify-evenly">
      <div className="p-6">
        <PostMansager
          idPostagem={apiPostUnico.idPostagem}
          tituloPostagem={apiPostUnico.tituloPostagem}
          nomeUsuario={apiPostUnico.nomeUsuario}
          localizacaoPostagem={apiPostUnico.localizacaoPostagem}
          fotoUsuario={apiPostUnico.fotoUsuario}
          fotoPostagem={apiPostUnico.fotoPostagem}
          contadorVotoPositivo={apiPostUnico.contadorVotoPositivo}
          contadorVotoNegativo={apiPostUnico.contadorVotoNegativo}
          contadorComentarios={apiPostUnico.contadorComentarios}
        />
      </div>

      <div className="p-6 flex-col justify-between">
        <div>
          <h3 className="text-md font-semibold">Comentários:</h3>
          <ul className="mt-2">
            {apiPostUnico.commentarios.map((comentario, index) => (
              <li key={index} className="border-b py-2">
                <div className="flex items-center gap-2">
                  <img src={comentario.fotoUsuario} alt="Usuário" className="w-[30px] rounded-full" />
                  <strong>{comentario.nomeUsuario}</strong>
                </div>
                <p className="ml-10">{comentario.commentario}</p>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] bg-white shadow rounded p-[20px] mt-4">
          <div>
            <label className="block font-semibold mb-1">Comentário:</label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="Escreva um comentário..."
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-fit">
            Enviar
          </button>
        </form>
      </div>
    </div>
    <div className="ml-[10px]">
      <NavigateButton conteudo="Voltar" path="/home" />
    </div>
  </>
);

};
