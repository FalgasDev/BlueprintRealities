"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Cadastro:", formData);
  };

  return (
    <div className="min-h-screen bg-[#FFF0E6] flex items-center justify-center p-4 font-sans">
      {/* Card Principal */}
      <div className="bg-[#FFF9F5] w-full max-w-4xl h-[550px] rounded-3xl shadow-xl flex overflow-hidden">
        {/* Lado Esquerdo - Imagem (Quarto Vazio para Cadastro) */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="/cadastro.png"
            alt="Quarto Vazio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lado Direito - Formulário */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-12">
          <h2 className="text-xl font-medium text-[#3D312A] tracking-widest uppercase mb-8">
            Cadastro
          </h2>

          <form onSubmit={handleSignup} className="w-full max-w-xs space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-4 py-3 shadow-sm border border-transparent focus:border-orange-300 focus:outline-none text-gray-700 placeholder-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-4 py-3 shadow-sm border border-transparent focus:border-orange-300 focus:outline-none text-gray-700 placeholder-gray-400"
            />

            <input
              type="password"
              name="password"
              placeholder="Senha"
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-4 py-3 shadow-sm border border-transparent focus:border-orange-300 focus:outline-none text-gray-700 placeholder-gray-400"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme a Senha"
              onChange={handleChange}
              className="w-full bg-white rounded-lg px-4 py-3 shadow-sm border border-transparent focus:border-orange-300 focus:outline-none text-gray-700 placeholder-gray-400"
            />

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 rounded border-gray-300 text-[#D95D1E] focus:ring-[#D95D1E] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 font-medium cursor-pointer"
              >
                Li e aceito os{" "}
                <span className="text-[#D95D1E]">Termos de Segurança</span>
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#D95D1E] hover:bg-[#b54a15] text-white font-medium py-3 rounded-full shadow-md transition-transform transform active:scale-95"
              >
                Cadastrar
              </button>
            </div>
          </form>

          {/* Link para Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Já tem um login?{" "}
              <Link
                href="/login"
                className="text-[#D95D1E] font-bold hover:underline"
              >
                Entre agora!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
