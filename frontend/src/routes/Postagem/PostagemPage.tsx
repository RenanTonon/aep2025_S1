import { useState } from "react";
import { HeaderMenu } from "../../components/PageLoyout/components/HeaderMenu";
import { ApiPostar } from "../../apis/ApiPostar";

export const PostagemPage = () => {
  const [titulo, setTitulo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [foto, setFoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await ApiPostar(titulo,endereco,foto);
      setModalMessage("✅ Postagem enviada com sucesso!");
    } catch (error: any) {
      setModalMessage("❌ Erro ao enviar postagem: " + error.message);
    } finally {
      setModalOpen(true); 
    }
  };

  return (

    <>
        <HeaderMenu/>
        <div className="flex flex-col justify-center items-center h-full w-full mt-[20px] gap-[10px]">
            <h1 className="flex text-start text-[24px]">Criar Postagem: </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] bg-white shadow rounded p-[20px]">
            <div>
                <label className="block font-semibold mb-1">Título da postagem</label>
                <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Digite o título"
                required
                />
            </div>
            <div>
                <label className="block font-semibold mb-1">Endereço</label>
                <input
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                placeholder="Digite o endereço da ocorrência"
                required
                />
            </div>
            <div>
                <label className="block font-semibold mb-1">Foto</label>
                <input
                type="file"
                accept="image/*"
                onChange={handleFotoChange}
                className="w-full p-[10px] bg-gray-200 rounded-[15px] cursor-pointer"
                required
                />
                {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="mt-3 w-48 h-48 object-cover rounded border"
                />
                )}
            </div>

            <button
                type="submit"
                className="bg-gradient-to-b from-[#3a2e8c] to-[#1a1440] text-white border-none rounded-lg py-3 px-10 font-bold cursor-pointer  transition-colors duration-200 w-full"
            >
                Enviar
            </button>
            </form>
        </div>
        
        {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <h2 className="text-lg font-bold mb-4">Resultado da Postagem</h2>
            <p className="mb-4">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
    
  );
};
