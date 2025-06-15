import axios from "axios";
import type { LoginType } from "../types/LoginType";

interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    email: string;
    name: string;
    username: string;
  };
}

export const ApiLogin = async (data: LoginType): Promise<LoginResponse> => {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", {
      email: data.email,
      password: data.password,
    });

    const { access_token } = response.data;

    return {
      success: true,
      message: "Login realizado com sucesso!",
      token: access_token,
      user: {
        email: data.email,
        name: "UsuarioV2", 
        username: "usernameAleatorio",   
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Erro ao realizar login",
    };
  }
};
