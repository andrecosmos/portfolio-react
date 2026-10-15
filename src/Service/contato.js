const phoneNumber = "5511971927935";
const message = encodeURIComponent("Olá! Gostaria de mais informações.");

export const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
