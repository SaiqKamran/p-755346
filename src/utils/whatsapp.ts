
export const openWhatsAppChat = (courseName: string) => {
  const phoneNumber = "918264900999"; // Format: country code (91) + number without +
  const message = `Hi, I'm interested in enrolling in the ${courseName} course at Arena Animation Chandigarh Sector 9. Could you please provide me with more information?`;
  
  // Make sure the message is properly encoded for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create the WhatsApp URL with the properly encoded message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open in a new tab
  window.open(whatsappUrl, '_blank');
  
  // Log for debugging
  console.log("Opening WhatsApp with URL:", whatsappUrl);
};
