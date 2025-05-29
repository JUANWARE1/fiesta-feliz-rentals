
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
    "footer.horarios": "Horarios de atención",
    
    // Office Hours
    "hours.monday-friday": "Lunes a Viernes: 9:00 a.m. – 6:00 p.m.",
    "hours.saturday": "Sábado: 10:00 a.m. – 2:00 p.m.",
    "hours.sunday": "Domingo: Cerrado",
    
    // Service Features
    "features.title": "Características:",
    "tents.feature1": "Diferentes tamaños disponibles",
    "tents.feature2": "Ideales para fiestas, eventos corporativos y reuniones familiares",
    "tents.feature3": "Instalación incluida",
    "tents.feature4": "Opciones con o sin paredes laterales",
    "inflatables.feature1": "Gran variedad de temáticas",
    "inflatables.feature2": "Seguros y resistentes",
    "inflatables.feature3": "Para todas las edades",
    "inflatables.feature4": "Incluyen supervisión durante el evento",
    "rockolas.feature1": "Miles de canciones disponibles",
    "rockolas.feature2": "Fáciles de usar",
    "rockolas.feature3": "Sonido de alta calidad",
    "rockolas.feature4": "Personalizables según el evento",
    "bulls.feature1": "Diferentes niveles de dificultad",
    "bulls.feature2": "Incluye operador capacitado",
    "bulls.feature3": "Área acolchada para mayor seguridad",
    "bulls.feature4": "Ideal para eventos corporativos y fiestas",
    "drinks.feature1": "Servicio de barras móviles",
    "drinks.feature2": "Bartenders profesionales",
    "drinks.feature3": "Menús personalizados",
    "drinks.feature4": "Opciones con y sin alcohol",
    "water.feature1": "Ideales para días calurosos",
    "water.feature2": "Toboganes acuáticos",
    "water.feature3": "Piscinas inflables",
    "water.feature4": "Con medidas de seguridad incluidas",
    
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
    "footer.horarios": "Office Hours",
    
    // Office Hours
    "hours.monday-friday": "Monday to Friday: 9:00 a.m. – 6:00 p.m.",
    "hours.saturday": "Saturday: 10:00 a.m. – 2:00 p.m.",
    "hours.sunday": "Sunday: Closed",
    
    // Service Features
    "features.title": "Features:",
    "tents.feature1": "Different sizes available",
    "tents.feature2": "Ideal for parties, corporate events and family gatherings",
    "tents.feature3": "Installation included",
    "tents.feature4": "Options with or without side walls",
    "inflatables.feature1": "Wide variety of themes",
    "inflatables.feature2": "Safe and durable",
    "inflatables.feature3": "For all ages",
    "inflatables.feature4": "Include supervision during the event",
    "rockolas.feature1": "Thousands of songs available",
    "rockolas.feature2": "Easy to use",
    "rockolas.feature3": "High quality sound",
    "rockolas.feature4": "Customizable according to the event",
    "bulls.feature1": "Different difficulty levels",
    "bulls.feature2": "Includes trained operator",
    "bulls.feature3": "Padded area for greater safety",
    "bulls.feature4": "Ideal for corporate events and parties",
    "drinks.feature1": "Mobile bar service",
    "drinks.feature2": "Professional bartenders",
    "drinks.feature3": "Custom menus",
    "drinks.feature4": "Options with and without alcohol",
    "water.feature1": "Ideal for hot days",
    "water.feature2": "Water slides",
    "water.feature3": "Inflatable pools",
    "water.feature4": "With included safety measures",
    
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
