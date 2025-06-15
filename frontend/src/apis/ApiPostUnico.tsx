import axios from "axios";
import type { PostType } from "../types/PostType";

export const ApiPostUnico = async (index: string): Promise<PostType | null> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token não encontrado. Faça login primeiro.");
      return null;
    }

    const response = await axios.get<PostType>(`http://localhost:3000/forum/${index}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    return response.data;

  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
};
