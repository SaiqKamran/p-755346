
export const openWhatsAppChat = (source: string, customMessage?: string) => {
  const phoneNumber = "918264900999";
  const message = customMessage || 
    `Hi, I'm interested in enrolling in the ${source} at Arena Animation Chandigarh Sector 9. Could you please provide me with more information?`;
  
  // Create the WhatsApp URL with the properly encoded message
  const encodedMessage = encodeURIComponent(message);
  
  // Use the web API format that ensures compatibility across devices
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  // Open in a new tab
  window.open(whatsappUrl, '_blank');
  console.log("Opening WhatsApp with URL:", whatsappUrl);
};
