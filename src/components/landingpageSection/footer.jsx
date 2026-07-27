export default function FooterSectionLandingpage() {
  return (
    <footer id="contact" className="bg-red-600 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-bold">
            Ayam Bakar Pak Untung
          </h2>
          <p className="mt-4 leading-7 text-red-100">
            Menyajikan ayam bakar, ayam goreng, lele goreng, dan berbagai
            hidangan lezat dengan cita rasa khas sejak tahun 2013.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-3">
            <li>
              <a rel="noreferrer" href="#home" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a rel="noreferrer" href="#menu" className="hover:text-yellow-300 transition">
                Menu
              </a>
            </li>

            <li>
              <a rel="noreferrer" href="#about" className="hover:text-yellow-300 transition">
                Tentang Kami
              </a>
            </li>
            <li>
              <a rel="noreferrer" href="#contact" className="hover:text-yellow-300 transition">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hubungi Kami</h3>
          <div className="space-y-3 text-red-100">
            <p>📍 Cicurug, Sukabumi</p>
            <p>📞 081319900109</p>
            <p>✉️ ayambakarpakuntung16@gmail.com </p>
            <div className="flex gap-5 pt-2">
              <a href="https://web.facebook.com/profile.php?id=61592052534538" target="_blank"  rel="noreferrer" className="hover:text-yellow-300 transition">
                Facebook
              </a>
              <a href="https://www.instagram.com/ayambakarpakuntung16/" target="_blank" rel="noreferrer" className="hover:text-yellow-300 transition">
                Instagram
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-red-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-red-100 text-center">
            © {new Date().getFullYear()} Ayam Bakar Pak Untung. All Rights Reserved.
          </p>
          <p className="text-sm text-red-100">
            Dibuat oleh abdul rojali || 2026
          </p>
        </div>
      </div>
    </footer>
  );
}