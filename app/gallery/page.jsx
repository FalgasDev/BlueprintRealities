"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Trash2,
  Calendar,
  Tag,
  Image as ImageIcon,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);

  // Carregar itens do localStorage ao montar o componente
  useEffect(() => {
    const savedItems = localStorage.getItem("blueprint_gallery");
    if (savedItems) {
      setGalleryItems(JSON.parse(savedItems));
    }
  }, []);

  // Função para deletar um item da galeria
  const handleDelete = (id) => {
    const updatedGallery = galleryItems.filter((item) => item.id !== id);
    setGalleryItems(updatedGallery);
    localStorage.setItem("blueprint_gallery", JSON.stringify(updatedGallery));
  };

  // Função para limpar tudo
  const clearAll = () => {
    if (confirm("Tem certeza que deseja apagar todas as imagens salvas?")) {
      setGalleryItems([]);
      localStorage.removeItem("blueprint_gallery");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-8 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Header da Galeria */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
                Minha Galeria
              </h1>
              <p className="text-gray-500">Seus projetos salvos</p>
            </div>
          </div>

          {galleryItems.length > 0 && (
            <button
              onClick={clearAll}
              className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-2 px-4 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
            >
              <Trash2 size={16} /> Limpar Galeria
            </button>
          )}
        </div>

        {/* Grid de Imagens */}
        {galleryItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-400">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Tag size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Sua galeria está vazia
            </h3>
            <p className="mb-6">Você ainda não salvou nenhum projeto.</p>
            <Link
              href="/new-design"
              className="bg-[#D95D1E] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#b54a15] transition-colors no-underline"
            >
              Criar Novo Design
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                {/* Imagem */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.room} - ${item.style}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay com botão de delete */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex justify-end p-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-white/90 text-red-500 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white cursor-pointer"
                      title="Excluir"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.room}
                    </h3>
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                      {item.style}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1 ml-auto">
                      {item.liked && (
                        <span className="text-red-500 flex items-center gap-1">
                          <Heart size={12} className="fill-red-500" /> Favorito
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
