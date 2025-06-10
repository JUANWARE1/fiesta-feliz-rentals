
import { useCallback } from 'react';
import { Product } from '@/data/products';

export const useWhatsAppRent = () => {
  const sendWhatsAppMessage = useCallback((product: Product) => {
    const phoneNumber = "523331051698";
    
    // Generar descripción corta basada en las dimensiones y tipo
    const descripcion = `${product.tipo} de ${product.dimensiones}`;
    
    // Crear el mensaje preformateado
    const message = `¡Hola! Estoy interesado en rentar el siguiente producto:

📦 Producto: ${product.nombre}
📋 Descripción: ${descripcion}
💰 Precio: $${product.precio}

¿Podrías ayudarme con el siguiente paso?`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Generar el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  }, []);

  return { sendWhatsAppMessage };
};
