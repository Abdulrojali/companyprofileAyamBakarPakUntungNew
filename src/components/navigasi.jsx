import { useState } from "react";

export default function Navigasi(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h3>ayam bakar pak Ayam_bakar pak untung</h3>
        {/* <img src="https://res.cloudinary.com/dgydtkwhp/image/upload/v1784165232/Ayam_bakar_pak_untung_w2zjen.webp"  alt="Logo" className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full object-cover"/> */}
        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8">
          {props.list.map((data, index) => (
            <li key={index}>
              <a
              rel="noreferrer"
                href={data.links}
                className="font-semibold hover:text-yellow-400 transition"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-red-600">
          <ul className="flex flex-col items-center py-4 gap-5">
            {props.list.map((data, index) => (
              <li key={index}>
                <a
                  href={data.links}
                  onClick={() => setIsOpen(false)}
                  className="font-semibold hover:text-yellow-300 transition"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}