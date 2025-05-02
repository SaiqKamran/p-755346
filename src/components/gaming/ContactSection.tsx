
import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-black/95 to-black/90 relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe 
          src="https://assets.pinterest.com/ext/embed.html?id=15199717489953425" 
          className="w-full h-full opacity-30"
          frameBorder="0" 
          scrolling="no"
          title="Pinterest Animation Background"
          allow="autoplay; encrypted-media"
          style={{
            position: 'absolute',
            top: '-5%',
            left: '-5%',
            width: '110%',
            height: '110%',
            border: 'none',
            pointerEvents: 'none'
          }}
        ></iframe>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
