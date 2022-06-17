import React from "react";
import Hero from "../../Components/Home/Hero";
import SixtyFour from "../../Components/Home/SixtyFour";
import WhyDoes from "../../Components/Home/WhyDoes";

const Home = () => {
    return (
        <>
            <main>
                <Hero/>
                <WhyDoes/>
                <SixtyFour/>
            </main>
        </>
    );
};

export default Home;