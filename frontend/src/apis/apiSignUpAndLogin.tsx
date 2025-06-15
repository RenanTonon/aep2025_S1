import type { SignupType } from "../types/SignupType";

interface SignupResponse {
  success: boolean;
  message: string;
  user?: SignupType;
}

export const ApiSignup = async (data: SignupType): Promise<SignupResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Usuário cadastrado com sucesso!",
        user: data,  
      });
    }, 1000); 
  });
};