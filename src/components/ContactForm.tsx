
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Configuración de EmailJS
      const serviceID = 'service_beboy'; // Necesitarás configurar esto
      const templateID = 'template_beboy'; // Necesitarás configurar esto
      const publicKey = 'YOUR_PUBLIC_KEY'; // Necesitarás configurar esto

      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        phone: formState.phone,
        message: formState.message,
        to_email: 'juan.jesus1518@gmail.com',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      toast({
        title: t("contact.success"),
        description: `${formState.name}, tu mensaje ha sido enviado correctamente`,
        variant: "default",
      });
      
      setFormState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      
    } catch (error) {
      console.error('Error enviando email:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t("contact.name")}
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            {t("contact.phone")}
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t("contact.email")}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t("contact.message")}
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button
  type="submit"
  className="w-full bg-beboy-purple hover:bg-beboy-purple/90 text-white"
  disabled={loading}
>
  {loading ? "Enviando..." : t("contact.send")}
</Button>

      
      <div className="text-sm text-muted-foreground text-center">
        
      </div>
    </form>
  );
};

export default ContactForm;
