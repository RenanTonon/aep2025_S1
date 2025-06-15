import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigateButton from "../../components/buttons/NavigateButton";
import type { LoginType } from "../../types/LoginType";
import { ApiLogin } from "../../apis/apiLogin";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!login || !senha) {
      alert("Por favor, preencha login e senha");
      return;
    }

    setLoading(true);

    const data: LoginType = { email: login, password: senha };

    try {
      const response = await ApiLogin(data);

      if (response.success && response.token) {
        localStorage.setItem("token", response.token);
        alert("Login realizado com sucesso!");
        navigate("/home");
      } else {
        alert(response.message || "Erro no login");
      }
    } catch (error) {
      alert("Erro na requisição, tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-white flex items-center justify-center">
        <form
          className="w-[400px] flex flex-col gap-2.5"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <label htmlFor="login" className="text-[#2d2174] font-bold mb-1">
            LOGIN
          </label>
          <input
            type="text"
            id="login"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="border-2 border-[#2d2174] rounded-lg p-2.5 mb-2 outline-none"
            required
          />

          <label htmlFor="senha" className="text-[#2d2174] font-bold mb-1">
            SENHA
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border-2 border-[#2d2174] rounded-lg p-2.5 mb-2 outline-none"
            required
          />

          <div className="flex justify-end mb-5">
            <a href="#" className="text-[#2d2174] text-sm no-underline hover:underline">
              ESQUECEU SENHA?
            </a>
          </div>

          <div className="flex justify-center gap-2.5">
            {/* Botão ENTRAR usa handleLogin e navega manualmente */}
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="bg-gradient-to-b from-[#3a2e8c] to-[#1a1440] text-white border-none rounded-lg py-3 px-10 font-bold cursor-pointer transition-colors duration-200 w-[200px]"
            >
              {loading ? "Carregando..." : "ENTRAR"}
            </button>

            {/* Botão CADASTRAR usa NavigateButton */}
            <NavigateButton path="/signup" conteudo="CADASTRAR" />
          </div>
        </form>
      </div>

      <div className="flex-1 relative bg-gradient-to-b from-[#2d2174] to-[#1a1440] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="logo text-center max-w-xl w-full relative z-20">
          <h1 className="tracking-widest text-4xl font-montserrat font-bold">
            CITY V
            <span className="inline-block border-2 rounded-full px-3 mx-2 border-white">
              🎙
            </span>
            ICE TALK
          </h1>
        </div>
      </div>
    </div>
  );
};
