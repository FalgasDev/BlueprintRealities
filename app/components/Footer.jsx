export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex justify-between">
        
        <div>
          <h3 className="font-bold text-lg mb-2">Contato</h3>
          <p>Whatsapp: (11) 98767-2049</p>
          <p>Email: blueprint@realities.com</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Endereço</h3>
          <p>São Paulo - SP</p>
          <p>Brasil</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Redes Sociais</h3>
          <p>Instagram: @blueprint_realities</p>
          <p>Facebook: Blueprint Realities</p>
        </div>
      </div>

      <p className="text-center mt-10 text-sm opacity-70">
        © Blueprint Realities
      </p>
    </footer>
  );
}
