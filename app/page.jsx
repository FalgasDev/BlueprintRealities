import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import {
  FiClock,
  FiDownload,
  FiAperture,
  FiUploadCloud,
  FiGlobe,
} from "react-icons/fi";

export default function Home() {
  const categories = [
    { name: "Moderno", image: "/moderno.png", offset: "mt-20" },
    { name: "Minimalista", image: "/minimalista.png", offset: "" },
    { name: "Rústico", image: "/rustica.png", offset: "mt-20" },
    { name: "Clássico", image: "/classica.png", offset: "" },
  ];

  const features = [
    {
      icon: <FiClock size={38} strokeWidth={1.2} />,
      text: "resposta rápida",
    },
    {
      icon: <FiDownload size={38} strokeWidth={1.2} />,
      text: "possibilidade de baixar o resultado",
    },
    {
      icon: <FiAperture size={38} strokeWidth={1.2} />,
      text: "designs únicos",
    },
    {
      icon: <FiUploadCloud size={38} strokeWidth={1.2} />,
      text: "upload de imagens em diferentes formatos",
    },
    {
      icon: <FiGlobe size={38} strokeWidth={1.2} />,
      text: "facilidade na navegação",
    },
  ];

  return (
    <>
      <section className="relative w-full h-[600px] mt-15">
        <Image
          src="/home.png"
          alt="Home background"
          fill
          className="object-cover"
        />

        <div className="absolute left-10 top-1/3 text-white max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Faça sua Casa dos <br /> Sonhos Hoje
          </h1>
          <p className="mt-3 text-lg">
            Bem-vindo à Blueprint Realities. Aqui você terá acesso a designs
            incríveis para seu lar.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-4xl text-lg font-medium">
            Começar
          </button>
        </div>
      </section>

      <section className="py-16 px-8 text-center bg-[#FFF5F1]">
        <h2 className="text-2xl font-bold mb-12">
          Escolha o melhor design para você
        </h2>

        {/* container das imagens */}
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap md:flex-nowrap">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`relative w-[220px] h-80 rounded-xl overflow-hidden shadow-md ${cat.offset}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />

              {/* NOME EM CIMA DA IMAGEM */}
              <p className="absolute bottom-3 left-3 text-white font-semibold text-lg drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-orange-100 px-8 text-center">
        <h2 className="text-xl font-semibold mb-8">
          Você só encontra aqui na Blueprint
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {features.map((ft, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow mb-3">
                {ft.icon}
              </div>
              <p className="font-medium">{ft.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FFF7F3] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <h2 className="text-3xl font-semibold leading-tight mb-3">
            Faça o design completo da sua casa
            <br />
            com a Blueprint Realities
          </h2>
          <p className="text-gray-700 mb-12">
            Aqui você pode deixar sua imaginação te guiar
          </p>

          {/* Grade de imagens IDENTICA ao layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Linha 1 */}
            <div className="md:col-span-2 h-[330px] relative rounded-xl overflow-hidden shadow">
              <Image
                src="/sala.png"
                alt="Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:col-span-1 h-[330px] relative rounded-xl overflow-hidden shadow">
              <Image
                src="/banheiro.png"
                alt="Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:col-span-1 h-[330px] relative rounded-xl overflow-hidden shadow">
              <Image
                src="/lavanderia.png"
                alt="Design"
                fill
                className="object-cover"
              />
            </div>

            {/* Linha 2 */}
            <div className="md:col-span-1 h-[300px] relative rounded-xl overflow-hidden shadow">
              <Image
                src="/quarto.png"
                alt="Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:col-span-2 h-[300px] relative rounded-xl overflow-hidden shadow">
              <Image
                src="/cozinha.png"
                alt="Design"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:col-span-1 h-[300px] relative rounded-xl overflow-hidden shadow">
              <Image
                src="/varanda.png"
                alt="Design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
