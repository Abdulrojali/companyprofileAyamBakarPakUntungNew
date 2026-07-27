

export default function AboutSectionLandingpage() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-50 py-16 px-5 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className=" w-full  h-full flex justify-center">
          <img
            src="https://res.cloudinary.com/dgydtkwhp/image/upload/v1783924276/aboutImg_noorno.webp"
            loading="lazy"
            crossOrigin="anonymous"
              referrerPolicy="no-referrer"
                       alt="Ayam Bakar Pak Untung"
            className="w-full h-screen  rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tentang Kami
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ayam Bakar{" "}
            <span className="text-red-500">Pak Untung</span>
          </h3>
          <p className="text-gray-600 leading-8 text-justify">
            Ayam Bakar Pak Untung merupakan kedai makanan yang telah berdiri
            sejak tahun <span className="font-semibold">2013</span> di daerah
            Cicurug, Sukabumi. Kami menyediakan berbagai pilihan menu seperti
            ayam bakar, ayam goreng, dan lele goreng dengan harga yang
            terjangkau. Tersedia area parkir yang luas serta berbagai promo dan
            diskon menarik setiap harinya.
          </p>
          <div className="mt-6">
            <p className="text-lg">
              <span className="font-semibold">Pemilik:</span> Pak Untung
            </p>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-3">
              Sosial Media
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                <a href="https://web.facebook.com/profile.php?id=61592052534538" target="_blank"  rel="noreferrer">facebook</a>
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full">
                <a href="https://www.instagram.com/ayambakarpakuntung16/" target="_blank" rel="noreferrer">instagram</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}