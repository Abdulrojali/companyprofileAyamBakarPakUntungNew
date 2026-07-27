export default function HomeSectionLandingpage() {
  return (
    <div
      id="home"
      className="relative w-full h-screen bg-[url('https://res.cloudinary.com/dgydtkwhp/image/upload/v1783924484/__3_hdfznu.webp')] bg-cover bg-center flex justify-center items-center font-sans">
      <div className="absolute inset-0 bg-red-900/60 backdrop-blur-[2px]"></div>
      <div className="relative z-10 flex flex-col justify-center items-center gap-5 px-6">
        <h1 className="text-7xl font-bold text-center text-white drop-shadow-lg">
          Selamat Datang di Ayam Bakar Pak Untung
        </h1>
        <p className="max-w-4xl text-center text-3xl text-white drop-shadow-lg">
          Disini kami menyediakan berbagai makanan yang murah, terjangkau,
          enak, dan mengenyangkan.
        </p>
        <button className="w-[300px] p-3 bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer text-white text-2xl rounded-2xl shadow-lg">
          Contact Kami
        </button>
      </div>
    </div>
  );
}