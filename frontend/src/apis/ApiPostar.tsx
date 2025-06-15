import axios from "axios";

export const ApiPostar = async (
  titulo: string,
  endereco: string,
  descricao: string,
  foto: File | null
): Promise<any> => {
  const token = localStorage.getItem("token");
  const userId = getUserIdFromToken();

  if (!token || !userId) {
    throw new Error("Usuário não autenticado ou token inválido");
  }

  let imageBase64 = "";

  if (foto) {
    imageBase64 = await fileToBase64(foto);
  }

  const payload = {
    title: titulo,
    adress: endereco,
    description: descricao,
    userId,
    image: imageBase64,
  };

  try {
    const response = await axios.post("http://localhost:3000/forum", payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Erro ao postar:", error.response?.data || error.message);
    throw error;
  }
};

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const getUserIdFromToken = (): string | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payloadBase64 = token.split('.')[1];
    const decodedPayload = atob(payloadBase64);
    const payloadObject = JSON.parse(decodedPayload);
    return payloadObject.userId || payloadObject.sub || null;
  } catch (e) {
    console.error("Erro ao decodificar token:", e);
    return null;
  }
};
