import axios from "axios";
import type { SignupType } from "../types/SignupType";

interface SignupResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: SignupType;
}

export const ApiSignup = async (data: SignupType): Promise<SignupResponse> => {
  try {
    const response = await axios.post("http://localhost:3000/auth/signup", {
      firstname: data.firstname,
      username: data.username,
      email: data.email,
      password: data.password,
    });

    const { access_token } = response.data;

    return {
      success: true,
      message: "Usuário cadastrado com sucesso!",
      token: access_token,
      user: data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Erro ao realizar cadastro",
    };
  }
};
