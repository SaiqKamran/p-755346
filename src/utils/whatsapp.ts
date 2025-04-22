
export const openWhatsAppChat = (source: string, customMessage?: string) => {
  const phoneNumber = "918264900999";
  const defaultMessage = `Hi, I'm interested in enrolling in the ${source} at Arena Animation Chandigarh Sector 9. Could you please provide me with more information?`;
  
  // Use the custom message if provided, otherwise use default
  const message = customMessage || defaultMessage;
  
  // Create the WhatsApp URL with the properly encoded message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
  // Open WhatsApp directly
  window.location.href = whatsappUrl;
  console.log("Redirecting to WhatsApp with URL:", whatsappUrl);
};
