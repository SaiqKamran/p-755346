
import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-black/95 to-black/90">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
