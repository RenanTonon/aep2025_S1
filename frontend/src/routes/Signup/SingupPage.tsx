import React, { useState } from "react";
import type { SignupType } from "../../types/SignupType";
import { ApiSignup } from "../../apis/apiSignUp";
import { useNavigate } from "react-router";

export const SignupPage = () => {
    const [firstname, setFirstName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const validateFields = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!firstname) newErrors.firstname = "Primeiro nome é obrigatório";
        else if (!nameRegex.test(firstname))
            newErrors.firstName =
                "Primeiro nome deve conter apenas letras (sem números ou símbolos)";
        else if (firstname.length < 2)
            newErrors.firstName = "Primeiro nome deve ter ao menos 2 caracteres";

        if (!username) newErrors.username = "Username é obrigatório";
        else if (!nameRegex.test(username))
            newErrors.username =
                "Username deve conter apenas letras (sem números ou símbolos)";
        else if (username.length < 2)
            newErrors.username = "Username deve ter ao menos 2 caracteres";

        if (!email) newErrors.email = "Email é obrigatório";
        else if (!emailRegex.test(email))
            newErrors.email = "Email deve ser um endereço válido";

        if (!password) newErrors.password = "Senha é obrigatória";
        else if (!passwordRegex.test(password))
            newErrors.password =
                "Senha deve ter no mínimo 8 caracteres, conter letras maiúsculas, minúsculas, números e caracteres especiais";

        if (!confirmPassword) newErrors.confirmPassword = "Confirme sua senha";
        else if (password !== confirmPassword)
            newErrors.confirmPassword = "Senhas não conferem";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!validateFields()) return;

        const signupData: SignupType = {
            firstname,
            username,
            email,
            password,
        };

        try {
            const response = await ApiSignup(signupData);
            if (response.success) {
                if (response.token) {
                    localStorage.setItem("token", response.token);
                }
                navigate('/home');
            } else {
                console.log("Falha ao cadastrar: " + response.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 flex flex-col justify-center items-start gap-6">
                <h2 className="text-3xl font-bold mb-6 text-left" style={{ color: "#2d2174" }}>
                    Crie sua conta
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                        <label htmlFor="firstName" className="block text-[#2d2174] font-bold mb-1">
                            Primeiro Nome
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Seu primeiro nome"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            className={`w-[300px] border-2 rounded-lg px-3 py-2.5 outline-none ${errors.firstName
                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                : "border-[#2d2174] focus:ring-2 focus:ring-[#2d2174]"
                                }`}
                            required
                        />
                        {errors.firstName && (
                            <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-[#2d2174] font-bold mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Seu username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={`w-[300px] border-2 rounded-lg px-3 py-2.5 outline-none ${errors.username
                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                : "border-[#2d2174] focus:ring-2 focus:ring-[#2d2174]"
                                }`}
                            required
                        />
                        {errors.username && (
                            <p className="text-red-600 text-sm mt-1">{errors.username}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-[#2d2174] font-bold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="exemplo@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-[300px] border-2 rounded-lg px-3 py-2.5 outline-none ${errors.email
                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                : "border-[#2d2174] focus:ring-2 focus:ring-[#2d2174]"
                                }`}
                            required
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-[#2d2174] font-bold mb-1">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Sua senha segura"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-[300px] border-2 rounded-lg px-3 py-2.5 outline-none ${errors.password
                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                : "border-[#2d2174] focus:ring-2 focus:ring-[#2d2174]"
                                }`}
                            required
                        />
                        {errors.password && (
                            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-[#2d2174] font-bold mb-1">
                            Confirmar Senha
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-[300px] border-2 rounded-lg px-3 py-2.5 outline-none ${errors.confirmPassword
                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                : "border-[#2d2174] focus:ring-2 focus:ring-[#2d2174]"
                                }`}
                            required
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-gradient-to-b from-[#3a2e8c] to-[#1a1440] text-white rounded-lg py-3 px-10 font-bold cursor-pointer transition-colors duration-200 hover:from-[#2d2174]"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>

            <div className="text-black flex flex-col items-center justify-center p-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: "#2d2174" }}>
                        CITY V<span className="text-yellow-300">🎙</span>ICE TALK
                    </h1>
                    <p className="text-lg" style={{ color: "#2d2174" }}>
                        Junte-se à nossa comunidade e compartilhe sua voz com o mundo!
                    </p>
                </div>
            </div>
        </div>
    );
};
