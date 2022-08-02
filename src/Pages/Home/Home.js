import React from "react";
import SixtyFour from "../../Components/Home/SixtyFour";
import WhyDoes from "../../Components/Home/WhyDoes";
import Auctor from "../../Components/Home/Auctor";
import Note from "../../Components/Home/Note";
import HeroScreen from "../../Components/Home/HeroScreen";
import Cover from "../../Components/Home/cover";
import Navbar from "../../Components/Home/header";


const Home = () => {
  return (
    <>
      <Navbar/>
      <Cover/>
      <WhyDoes/>
      <SixtyFour/>
      <Auctor/>
      <Note/>
    </>
  );
};

export default Home;