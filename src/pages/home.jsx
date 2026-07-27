
import React, { lazy, Suspense } from 'react';
const HomeSectionLandingpage = lazy(()=> import("../components/landingpageSection/home"))
const Navigasi =lazy(()=> import ('../components/navigasi'))
const AboutSectionLandingpage =lazy(()=>import("../components/landingpageSection/about"))
const MenuSectionLandingpage = lazy(()=>import("../components/landingpageSection/menu"))
const FooterSectionLandingpage = lazy(()=>import("../components/landingpageSection/footer"))
const LocationLandingpage = lazy(()=>import("../components/landingpageSection/location"))
export default function HomePage(){
    const naviLinks=[
        {name:"home", links:"#home"},
        {name:"about", links:"#about"},
        {name:"menu", links:"#menu"},
        {name:"lokasi", links:"#lokasi"},
        {name:"contact", links:"#contact"},
    ]

    return(
        <div className="w-full">
            <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Memuat halaman...</div>}>
       <Navigasi list={naviLinks}/>
       <HomeSectionLandingpage/>   
       <AboutSectionLandingpage/>
       <MenuSectionLandingpage/>
       <LocationLandingpage/>
       <FooterSectionLandingpage/>
      </Suspense>

        </div>
    )
}