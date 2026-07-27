const products = [
    {
      id:1,
        url:"https://res.cloudinary.com/dgydtkwhp/image/upload/v1784099437/1_b7md4v.webp",
        name:"ayam bakar paha + nasi",
        price:25000,
        deskripsi:"menu paket komplit ayam paha utuh + nasi + lalab + sambel, gratis teh anget"
    },
    {
      id:2,
        url:"https://res.cloudinary.com/dgydtkwhp/image/upload/v1784099498/6_ca77fx.webp",
        name:"ayam bakar paha saja",
        price:18000,
        deskripsi:"menu bungkus tanpa nasi, dapet lalab +sambel"
    },
        {
          id:3,
        url:"https://res.cloudinary.com/dgydtkwhp/image/upload/v1784099448/2_brov9n.webp",
        name:"ayam goreng paha + nasi",
        price:25000,
        deskripsi:"menu paket komplit ayam paha utuh + nasi + lalab + sambel, gratis teh anget"
    },
    {
      id:4,
        url:"https://res.cloudinary.com/dgydtkwhp/image/upload/v1784099448/2_brov9n.webp",
        name:"ayam goreng paha saja",
        price:18000,
        deskripsi:"menu bungkus tanpa nasi, dapet lalab +sambel"
    },
    {
      id:5,
        url:"https://res.cloudinary.com/dgydtkwhp/image/upload/v1784099461/3_wguc3p.webp",
        name:" lele goreng + nasi",
        price:20000,
        deskripsi:"menu paket komplit ayam paha utuh + nasi + lalab + sambel, gratis teh anget"
    },
    {
      id:6,
        url:"https://res.cloudinary.com/dgydtkwhp/image/upload/v1784099473/4_jhulfz.webp",
        name:"lele goreng saja",
        price:15000,
        deskripsi:"menu bungkus tanpa nasi, dapet lalab +sambel"
    },
]
export default function MenuSectionLandingpage(){
    return(
<div id="menu" className="w-full min-h-screen px-4 py-12 bg-gray-50 font-sans">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      List Menu
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 " >
      {products.map((data,index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <img
            src={data.url}
            alt={data.name}
            
            className="w-full h-52 object-cover"
              loading="lazy"
            crossOrigin="anonymous"
              referrerPolicy="no-referrer"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              {data.name}
            </h3>
            <p className="text-red-600 text-lg font-bold mb-3">
              Rp. {Number(data.price).toLocaleString("id-ID")}
            </p>
            <p className="text-gray-600 text-sm line-clamp-3">
              {data.deskripsi}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    )
}