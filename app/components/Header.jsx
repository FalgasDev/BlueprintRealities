import Image from "next/image";
import Link from "next/link";
import { BsPerson } from "react-icons/bs";

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
        <Link href="/">Blueprint Realities</Link>
      </div>

      <nav className="flex gap-6 text-sm">
        <Link href="/new-design" className="hover:border-b">Novo Design</Link>
        <Link href="/gallery" className="hover:border-b">Galeria</Link>
        <Link href="/preferences" className="hover:border-b">Preferências</Link>
        <Link href="/login"><BsPerson size={20} /></Link>
      </nav>
    </header>
  );
}
