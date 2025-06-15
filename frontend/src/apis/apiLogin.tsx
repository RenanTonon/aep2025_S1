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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Login realizado com sucesso!",
        token: "token.jwt.simulado.login.1234567890",
        user: {
          email: data.email,
          name: "Usuário Teste",
          username: "usuarioteste",
        },
      });
    }, 1000);
  });
};
