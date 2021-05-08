import React from "react";
import About from "../component/About";
import Header from "../component/Header";
import Info from "../component/Info";
import Project from "../component/Project";
import Services from "../component/Services";
import Slider from "../component/Slider";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Services />
      <Info />
      <Project />
      <Footer />
    </div>
  );
}
