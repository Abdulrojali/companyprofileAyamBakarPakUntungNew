export default function LocationLandingpage(){
    const links="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.779615681169!2d106.76568161110634!3d-6.79664689317225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6832d5070bde35%3A0x95ae45673e32819e!2sArema%20Pak%20Untung%20Ayam%20Bakar!5e0!3m2!1sid!2sid!4v1783989789931!5m2!1sid!2sid"
    return(
        <div id="lokasi" className="location w-full h-screen">
            <h1 className="text-3xl text-center font-bold font-sans mb-3">Lokasi kami</h1>
          <iframe 
          title="lokasi ayam bakar pak untung"
  src={links}
  loading="lazy" 
  sandbox="allow-scripts allow-same-origin allow-popups"
  style={{ width: '100%', height: '500px', border: 'none' }}
></iframe>

          </div>
    )
}