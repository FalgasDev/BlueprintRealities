"use client";

import React, { useState, useRef } from "react";
import { BsCloudUpload, BsChevronLeft, BsChevronRight, BsImage, Bstrash } from "react-icons/bs";
import { FaTrash } from "react-icons/fa"; // Ícone de lixeira opcional

const rooms = [
  { id: "bedroom", label: "Quarto", img: "/quarto.png" },
  { id: "living", label: "Sala de Estar", img: "/sala.png" },
  { id: "kitchen", label: "Cozinha", img: "/cozinha.png" },
  { id: "laundry", label: "Lavanderia", img: "/lavanderia.png" },
  { id: "bathroom", label: "Banheiro", img: "/banheiro.png" },
  { id: "office", label: "Escritório", img: "/escritorio.png" },
  { id: "balcony", label: "Varanda", img: "/varanda.png" },
  { id: "garden", label: "Jardim", img: "/jardim.png" },
];

const styles = [
  { id: "modern", label: "Moderno", img: "/moderno.png" },
  { id: "rustic", label: "Rústico", img: "/rustica.png" },
  { id: "prairie", label: "Praiano", img: "/praiano.png" },
  { id: "minimalist", label: "Minimalista", img: "/minimalista.png" },
  { id: "industrial", label: "Industrial", img: "/industrial.png" },
  { id: "scandinavian", label: "Escandinavo", img: "/escandinavo.png" },
  { id: "boho", label: "Boho", img: "/boho.png" },
  { id: "classic", label: "Clássico", img: "/classica.png" },
];

export default function DesignPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // Estado para mostrar o preview da imagem
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [dimensions, setDimensions] = useState({ height: "", width: "", length: "" });
  const [budget, setBudget] = useState("");

  const roomScrollRef = useRef(null);
  const styleScrollRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      // Cria uma URL temporária para mostrar a imagem
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  }

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { clientWidth } = ref.current;
      const scrollAmount = clientWidth; 
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = () => {
    if (!selectedFile || !selectedRoom || !selectedStyle) {
      alert("Por favor, preencha as informações obrigatórias.");
      return;
    }
    console.log({ file: selectedFile, room: selectedRoom, style: selectedStyle, dimensions, budget });
    alert("Dados prontos para envio!");
  };

  return (
    // CONTAINER PRINCIPAL: Divide a tela em 2 colunas no Desktop (lg)
    <div className="flex flex-col lg:flex-row h-[93.5vh] bg-gray-50 font-sans overflow-hidden mt-15">
      
      {/* ================= COLUNA ESQUERDA (Preview / Upload) ================= */}
      <div className="lg:w-5/12 bg-gray-200 relative flex flex-col items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-gray-300 shadow-inner">
        
        {previewUrl ? (
           // SE TIVER IMAGEM SELECIONADA
           <div className="relative w-full max-w-lg shadow-2xl rounded-lg overflow-hidden group">
             <img src={previewUrl} alt="Preview" className="w-full h-auto object-cover" />
             
             {/* Botão para remover imagem */}
             <button 
                onClick={clearFile}
                className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                title="Trocar imagem"
             >
               <FaTrash size={16}/>
             </button>
             <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white p-3 text-center text-sm">
                Sua imagem original
             </div>
           </div>
        ) : (
           // SE NÃO TIVER IMAGEM (Área de Upload Gigante)
           <div className="w-full h-full flex flex-col items-center justify-center border-4 border-dashed border-gray-400 rounded-2xl p-10 hover:bg-gray-100/50 transition-colors relative group bg-white/50">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <BsCloudUpload className="w-24 h-24 text-gray-400 group-hover:text-orange-500 transition-colors mb-6" />
              <h3 className="text-xl font-bold text-gray-700">Arraste sua foto aqui</h3>
              <p className="text-gray-500 mt-2">ou clique para selecionar</p>
              
              <div className="mt-8">
                 <button className="bg-[#D95D1E] text-white px-8 py-3 rounded-full font-bold shadow-lg pointer-events-none">
                    Escolher Arquivo
                 </button>
              </div>
           </div>
        )}
      </div>

      {/* ================= COLUNA DIREITA (Controles / Formulário) ================= */}
      {/* Adicionado overflow-y-auto para permitir scroll apenas nessa parte */}
      <div className="lg:w-7/12 bg-white h-auto lg:h-screen overflow-y-auto">
        <div className="max-w-3xl mx-auto p-8 lg:p-12 pb-32">
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
            Personalize seu Ambiente
          </h1>
          <p className="text-gray-500 mb-10">Configure os detalhes para a IA gerar sua decoração.</p>

          <div className="space-y-12">
            
            {/* Aviso visual caso não tenha imagem selecionada ainda */}
            {!previewUrl && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded animate-pulse">
                    <p className="text-orange-700 font-medium flex items-center gap-2">
                        <BsImage />
                        Comece fazendo o upload da imagem ao lado (ou acima no mobile).
                    </p>
                </div>
            )}

            {/* 2. Escolha do Cômodo */}
            <section className="relative">
              <div className="flex justify-between items-end mb-4">
                 <h2 className="text-xl font-bold text-gray-800">1. Qual é o cômodo?</h2>
                 <span className="text-sm text-orange-400 uppercase tracking-wider font-semibold">Obrigatório</span>
              </div>
              
              <div className="relative group">
                 <button 
                   onClick={() => scroll(roomScrollRef, "left")}
                   className="absolute -left-4 top-22 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10 text-gray-600 border border-gray-100 hidden group-hover:flex cursor-pointer"
                 >
                   <BsChevronLeft size={20}/>
                 </button>

                 <div 
                   ref={roomScrollRef}
                   className="flex gap-4 overflow-x-hidden scroll-smooth w-full py-2"
                 >
                   {rooms.map((room) => (
                      <div 
                        key={room.id}
                        onClick={() => setSelectedRoom(room.id)}
                        // Ajuste de largura: mobile (50%), tablet/desktop (25%)
                        className={`flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(25%-12px)] cursor-pointer`}
                      >
                        <div className={`w-full aspect-square relative rounded-xl overflow-hidden mb-3 transition-all duration-200 shadow-sm border-2
                          ${selectedRoom === room.id ? 'border-orange-500 ring-2 ring-orange-200' : 'border-transparent hover:border-gray-200'}`}
                        >
                            <img src={room.img} alt={room.label} className="object-cover w-full h-full" />
                            {selectedRoom === room.id && (
                               <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center">
                                   <div className="bg-white rounded-full p-1 shadow-sm">
                                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                   </div>
                               </div>
                            )}
                        </div>
                        <p className={`text-center text-sm font-medium ${selectedRoom === room.id ? 'text-orange-600' : 'text-gray-600'}`}>
                          {room.label}
                        </p>
                      </div>
                   ))}
                 </div>

                 <button 
                   onClick={() => scroll(roomScrollRef, "right")}
                   className="absolute -right-4 top-22 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10 text-gray-600 border border-gray-100 hidden group-hover:flex cursor-pointer"
                 >
                   <BsChevronRight size={20}/>
                 </button>
              </div>
            </section>

            {/* 3. Escolha do Estilo */}
            <section className="relative">
              <div className="flex justify-between items-end mb-4">
                 <h2 className="text-xl font-bold text-gray-800">2. Qual estilo deseja?</h2>
                 <span className="text-sm text-orange-400 uppercase tracking-wider font-semibold">Obrigatório</span>
              </div>
              
              <div className="relative group">
                 <button 
                   onClick={() => scroll(styleScrollRef, "left")}
                   className="absolute -left-4 top-22 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10 text-gray-600 border border-gray-100 hidden group-hover:flex cursor-pointer"
                 >
                   <BsChevronLeft size={20}/>
                 </button>

                 <div 
                   ref={styleScrollRef}
                   className="flex gap-4 overflow-x-hidden scroll-smooth w-full py-2"
                 >
                   {styles.map((style) => (
                      <div 
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        className={`flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(25%-12px)] cursor-pointer`}
                      >
                        <div className={`w-full aspect-square relative rounded-xl overflow-hidden mb-3 transition-all duration-200 shadow-sm border-2
                          ${selectedStyle === style.id ? 'border-orange-500 ring-2 ring-orange-200' : 'border-transparent hover:border-gray-200'}`}
                        >
                            <img src={style.img} alt={style.label} className="object-cover w-full h-full" />
                            {selectedStyle === style.id && (
                               <div className="absolute inset-0 bg-orange-500/10 flex items-center justify-center">
                                   <div className="bg-white rounded-full p-1 shadow-sm">
                                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                   </div>
                               </div>
                            )}
                        </div>
                        <p className={`text-center text-sm font-medium ${selectedStyle === style.id ? 'text-orange-600' : 'text-gray-600'}`}>
                          {style.label}
                        </p>
                      </div>
                   ))}
                 </div>

                 <button 
                   onClick={() => scroll(styleScrollRef, "right")}
                   className="absolute -right-4 top-22 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 z-10 text-gray-600 border border-gray-100 hidden group-hover:flex cursor-pointer"
                 >
                   <BsChevronRight size={20}/>
                 </button>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 4. Metragem */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">3. Dimensões (opcional)</h2>
                    <div className="grid grid-cols-3 gap-3">
                    {['Altura', 'Largura', 'Comp.'].map((label) => (
                        <div key={label}>
                            <label className="text-xs text-gray-500 font-semibold ml-1 mb-1 block">{label}</label>
                            <input 
                            type="text" 
                            // placeholder="0.00"
                            onChange={(e) => {
                                const key = label === 'Altura' ? 'height' : label === 'Largura' ? 'width' : 'length';
                                setDimensions({...dimensions, [key]: e.target.value})
                            }}
                            className="w-full border border-gray-300 bg-gray-50 rounded-lg px-3 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                            />
                        </div>
                    ))}
                    </div>
                </section>

                {/* 5. Investimento */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-9">4. Orçamento Estimado</h2>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 font-semibold">R$</span>
                        <input 
                        type="number" 
                        placeholder="0,00"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full border border-gray-300 bg-gray-50 rounded-lg pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                        />
                    </div>
                </section>
            </div>

            {/* Botão Final - Fixo no mobile ou fim da página no desktop */}
            <div className="pt-8 border-t border-gray-100">
                <button 
                    onClick={handleSubmit}
                    className="w-full bg-[#D95D1E] hover:bg-[#b54a15] text-white text-xl font-bold py-4 rounded-xl shadow-lg transform transition active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>Gerar Decoração</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">A IA pode levar alguns segundos para processar sua imagem.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}