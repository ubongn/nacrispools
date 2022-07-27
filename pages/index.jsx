import React from "react";
import Intro from "../component/Intro/Intro";
import Navbar from "../component/Header/Navbar";
import Info from "../component/Intro/Info";
import Project from "../component/Jobs/Project";
import Services from "../component/Services/Services";
import Slider from "../component/Jobs/Slider";
import Footer from "../component/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Intro />
      <Services />
      <Info />
      <Project />
      <Footer />
      <a href="https://wa.link/0tr1yx" class="whatsapp_float" target="_blank">
        
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}
