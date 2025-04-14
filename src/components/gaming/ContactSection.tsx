
import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-t from-[#1b1240] to-purple-900/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
