import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 shadow-sm bg-white fixed top-0 z-50">
      <div className="font-semibold text-lg flex gap-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={30}
          height={30}
        />
        <a href="/">Blueprint Realities</a>
      </div>

      <nav className="flex gap-6 text-sm">
        <a href="#design" className="hover:border-b">Novo Design</a>
        <a href="#meus-designs" className="hover:border-b">Meus Designs</a>
        <a href="#login-registro" className="hover:border-b">Login/Registro</a>
      </nav>
    </header>
  );
}
