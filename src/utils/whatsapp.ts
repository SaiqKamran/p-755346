
export const openWhatsAppChat = (courseName: string) => {
  const phoneNumber = "918264900999"; // Format: country code (91) + number without +
  const message = `Hi, I'm interested in enrolling in the ${courseName} course at Arena Animation Chandigarh Sector 9. Could you please provide me with more information?`;
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};
