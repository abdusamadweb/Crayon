import React from 'react'
import Hero from "./hero/Hero";
import What from "./what-we-do/What";
import Modern from "./modern/Modern";
import Career from "./career/Career";
import News from "./news/News";
import Partners from "./partners/Partners";
import Offices from "../../components/offices/Offices";

const Home = () => {

    return (
        <div className='home'>
            <Hero />
            <What />
            <Modern />
            <Career />
            <News />
            <Partners />
            <Offices />
        </div>
    )
}

export default Home
