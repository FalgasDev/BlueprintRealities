"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Trash2,
  Calendar,
  Tag,
  Edit2,
  Play,
  Ruler,
  Wallet,
  Save,
  X,
} from "lucide-react";
import Link from "next/link";

export default function PreferencesPage() {
  const [preferences, setPreferences] = useState([]);

  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({ budget: "", h: "", w: "", l: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("blueprint_preferences");
      if (savedItems) {
        setPreferences(JSON.parse(savedItems));
      }
    }
  }, []);

  const handleDelete = (id) => {
    if (confirm("Tem certeza que deseja excluir este card?")) {
      const updated = preferences.filter((item) => item.id !== id);
      setPreferences(updated);
      localStorage.setItem("blueprint_preferences", JSON.stringify(updated));
    }
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setEditForm({
      budget: item.budget || "",
      h: item.dimensions?.height || "",
      w: item.dimensions?.width || "",
      l: item.dimensions?.length || "",
    });
  };

  const handleSaveEdit = () => {
    const updatedList = preferences.map((item) => {
      if (item.id === editingItem.id) {
        return {
          ...item,
          budget: editForm.budget,
          dimensions: {
            height: editForm.h,
            width: editForm.w,
            length: editForm.l,
          },
        };
      }
      return item;
    });

    setPreferences(updatedList);
    localStorage.setItem("blueprint_preferences", JSON.stringify(updatedList));
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-8 mt-15">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
              Meus Cards
            </h1>
            <p className="text-gray-500">
              Suas configurações de design favoritas
            </p>
          </div>
        </div>

        {preferences.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-400">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <Tag size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nenhum card salvo</h3>
            <p className="mb-6">
              Crie um design e clique em "Salvar Info" no resultado.
            </p>
            <Link
              href="/new-design"
              className="bg-[#D95D1E] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#b54a15] transition-colors no-underline"
            >
              Criar Novo Design
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preferences.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all p-6 relative group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.roomLabel}
                    </h3>
                    <span className="text-orange-600 text-sm font-semibold uppercase">
                      {item.styleLabel}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(item)}
                      className="text-gray-400 hover:text-blue-500 p-1 rounded hover:bg-blue-50 transition-colors cursor-pointer"
                      title="Editar informações"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                      title="Excluir"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Wallet size={16} className="text-gray-400" />
                    <span>
                      {item.budget ? `R$ ${item.budget}` : "Sem orçamento"}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600 text-sm">
                    <Ruler size={16} className="text-gray-400 mt-0.5" />
                    <div className="flex flex-col">
                      <span>H: {item.dimensions?.height || "-"} m</span>
                      <span>L: {item.dimensions?.width || "-"} m</span>
                      <span>C: {item.dimensions?.length || "-"} m</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-xs pt-2 border-t border-gray-50">
                    <Calendar size={12} />
                    <span>Criado em {item.date}</span>
                  </div>
                </div>

                <Link
                  href={`/new-design?room=${item.roomId}&style=${item.styleId}&budget=${item.budget}&h=${item.dimensions?.height}&w=${item.dimensions?.width}&l=${item.dimensions?.length}`}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 no-underline"
                >
                  <Play size={16} fill="currentColor" /> Usar este modelo
                </Link>
              </div>
            ))}
          </div>
        )}

        {editingItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setEditingItem(null)}
          >
            <div
              className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Editar Card</h3>
                <button
                  onClick={() => setEditingItem(null)}
                  className="text-gray-400 hover:text-gray-800"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Orçamento
                  </label>
                  <input
                    type="number"
                    value={editForm.budget}
                    onChange={(e) =>
                      setEditForm({ ...editForm, budget: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Altura
                    </label>
                    <input
                      type="text"
                      value={editForm.h}
                      onChange={(e) =>
                        setEditForm({ ...editForm, h: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Largura
                    </label>
                    <input
                      type="text"
                      value={editForm.w}
                      onChange={(e) =>
                        setEditForm({ ...editForm, w: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Compr.
                    </label>
                    <input
                      type="text"
                      value={editForm.l}
                      onChange={(e) =>
                        setEditForm({ ...editForm, l: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSaveEdit}
                  className="w-full bg-[#D95D1E] text-white py-3 rounded-lg font-bold hover:bg-[#b54a15] mt-4 flex items-center justify-center gap-2"
                >
                  <Save size={18} /> Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
