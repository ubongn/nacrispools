import React from "react";

import ContactFooter from "../component/Contact/ContactFooter";
import ContactAbout from "../component/Contact/ContactAbout";
import Offer from "../component/Contact/Offer";
import ContactHeader from "../component/Contact/ContactHeader";
import ContactForm from "../component/Contact/ContactForm";

export default function contact() {
  return (
    <>
      <ContactHeader />

      <ContactForm />

      <Offer />
      <ContactAbout />
      <ContactFooter />
    </>
  );
}
