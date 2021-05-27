import React from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/Navbar";

export default function Layout ({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
