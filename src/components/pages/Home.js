import React from "react";
import HeroSection from "../HeroSection";
import ItemsByCategory from "../ItemsByCategory";
import TopProducts from "../TopProducts";

function Home() {
  return (
    <>
      <HeroSection />
      <ItemsByCategory />
      <TopProducts />
    </>
  );
}

export default Home;
