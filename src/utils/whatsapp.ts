
export const openWhatsAppChat = (source: string, customMessage?: string) => {
  const phoneNumber = "918264900999";
  const message = customMessage || 
    `Hi, I'm interested in enrolling in the ${source} at Arena Animation Chandigarh Sector 9. Could you please provide me with more information?`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
  console.log("Opening WhatsApp with URL:", whatsappUrl);
};
