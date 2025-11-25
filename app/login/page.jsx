"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // Aqui entra sua lógica de autenticação (NextAuth, Firebase, etc)
  };

  return (
    // Fundo da página (Tom pastel)
    <div className="min-h-screen bg-[#FFF0E6] flex items-center justify-center p-4 font-sans">
      {/* Card Principal */}
      <div className="bg-[#FFF9F5] w-full max-w-4xl h-[550px] rounded-3xl shadow-xl flex overflow-hidden">
        {/* Lado Esquerdo - Imagem (Decorada/Mobiliada para Login) */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="/login.png"
            alt="Quarto Decorado"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lado Direito - Formulário */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-12 relative">
          {/* Ícone de Usuário */}
          <div className="mb-6 flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-[#3D312A] rounded-full flex items-center justify-center mb-2">
              <BsPerson size={35} className="text-[#3D312A]" />
            </div>
            <h2 className="text-xl font-medium text-[#3D312A] tracking-widest uppercase">
              Login
            </h2>
          </div>

          <form onSubmit={handleLogin} className="w-full max-w-xs space-y-5">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded-lg px-4 py-3 shadow-sm border border-transparent focus:border-orange-300 focus:outline-none text-gray-700 placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded-lg px-4 py-3 shadow-sm border border-transparent focus:border-orange-300 focus:outline-none text-gray-700 placeholder-gray-400"
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-5 h-5 rounded border-gray-300 text-[#D95D1E] focus:ring-[#D95D1E] cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 font-medium cursor-pointer"
              >
                Lembre-se de mim
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D95D1E] hover:bg-[#b54a15] text-white font-medium py-3 rounded-full shadow-md transition-transform transform active:scale-95"
            >
              Entrar
            </button>
          </form>

          {/* Link para Cadastro */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Não tem uma conta?{" "}
              <Link
                href="/cadastro"
                className="text-[#D95D1E] font-bold hover:underline"
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
