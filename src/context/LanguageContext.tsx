
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.products": "Productos",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",
    "nav.blog": "Blog",
    "nav.testimonials": "Testimonios",
    "nav.videos": "Videos",
    
    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Diversiones para todo tipo de eventos",
    "services.tents": "Renta de Carpas",
    "services.tents.desc": "Carpas de diferentes tamaños para tus eventos",
    "services.inflatables": "Casas Inflables",
    "services.inflatables.desc": "Gran variedad de inflables para niños y adultos",
    "services.rockolas": "Rockolas",
    "services.rockolas.desc": "Música para animar tu evento",
    "services.bulls": "Toros Mecánicos",
    "services.bulls.desc": "Para una experiencia de diversión extrema",
    "services.drinks": "Bebidas",
    "services.drinks.desc": "Servicio de bebidas para tu evento",
    "services.water": "Inflables Acuáticos",
    "services.water.desc": "Diversión acuática para días calurosos",
    
    // Videos
    "videos.title": "Videos Funcionales",
    "videos.subtitle": "Mira nuestros productos en acción",
    
    // Products
    "products.title": "Productos y Costos",
    "products.subtitle": "Encuentra el inflable perfecto para tu evento",
    "products.dimensions": "Dimensiones",
    "products.type": "Tipo",
    "products.price": "Precio",
    "products.filter": "Filtrar por",
    "products.all": "Todos",
    "products.search": "Buscar producto",
    "products.rentNow": "Renta ahora",
    
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes alguna pregunta? ¡Contáctanos!",
    "contact.name": "Nombre",
    "contact.phone": "Teléfono",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.success": "Mensaje enviado con éxito",
    "contact.error": "Error al enviar el mensaje",
    "contact.whatsapp": "Contáctanos por WhatsApp",
    
    // Gallery
    "gallery.title": "Galería",
    "gallery.subtitle": "Mira nuestros inflables en acción",
    
    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Consejos y noticias sobre eventos",
    "blog.readMore": "Leer más",
    
    // Testimonials
    "testimonials.title": "Testimonios",
    "testimonials.subtitle": "Lo que dicen nuestros clientes",
    
    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.location": "Ubicación",
    "footer.phone": "Teléfono",
    "footer.email": "Correo electrónico",
    
    // Types
    "type.brincolín": "Brincolín",
    "type.escaladora": "Escaladora",
    "type.brincolín con resbaladilla": "Brincolín con resbaladilla",
    "type.juego mecánico": "Juego mecánico",
    "type.inflable acuático": "Inflable acuático"
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.testimonials": "Testimonials",
    "nav.videos": "Videos",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Entertainment for all types of events",
    "services.tents": "Tent Rentals",
    "services.tents.desc": "Tents of different sizes for your events",
    "services.inflatables": "Inflatable Houses",
    "services.inflatables.desc": "Wide variety of inflatables for children and adults",
    "services.rockolas": "Jukeboxes",
    "services.rockolas.desc": "Music to animate your event",
    "services.bulls": "Mechanical Bulls",
    "services.bulls.desc": "For an extreme fun experience",
    "services.drinks": "Drinks",
    "services.drinks.desc": "Drink service for your event",
    "services.water": "Water Inflatables",
    "services.water.desc": "Water fun for hot days",
    
    // Videos
    "videos.title": "Functional Videos",
    "videos.subtitle": "See our products in action",
    
    // Products
    "products.title": "Products and Pricing",
    "products.subtitle": "Find the perfect inflatable for your event",
    "products.dimensions": "Dimensions",
    "products.type": "Type",
    "products.price": "Price",
    "products.filter": "Filter by",
    "products.all": "All",
    "products.search": "Search product",
    "products.rentNow": "Rent now",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have any questions? Contact us!",
    "contact.name": "Name",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.success": "Message sent successfully",
    "contact.error": "Error sending message",
    "contact.whatsapp": "Contact us via WhatsApp",
    
    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle": "See our inflatables in action",
    
    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Tips and news about events",
    "blog.readMore": "Read more",
    
    // Testimonials
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "What our clients say",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.location": "Location",
    "footer.phone": "Phone",
    "footer.email": "Email",
    
    // Types
    "type.brincolín": "Bouncy castle",
    "type.escaladora": "Climbing inflatable",
    "type.brincolín con resbaladilla": "Bouncy castle with slide",
    "type.juego mecánico": "Mechanical game",
    "type.inflable acuático": "Water inflatable"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
