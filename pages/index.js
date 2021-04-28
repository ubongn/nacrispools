import React from "react";
import About from "../component/About";
import Header from "../component/Header";
import Slider from "../component/Slider";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <About />
    </div>
  );
}
