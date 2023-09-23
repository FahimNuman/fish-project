import React from "react";
import Hero from "../../components/Home/Hero";
import Category from "../../components/Home/Category";
import About from "../../components/Home/About";
import Contribute from "../../components/Home/Contribute";
import Banner from "../../components/Home/Banner";
import Help from "../../components/Home/Help";

export default function Home() {
  return (
    <div className="max-w-layout mx-auto">
      <Hero />
      <Category />
      <About />
      <Contribute />
      <Banner />
      <Help />
    </div>
  );
}
