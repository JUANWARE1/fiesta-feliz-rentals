
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";
import ContactButtons from "@/components/ContactButtons";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{t("contact.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("contact.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">{t("contact.title")}</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">{t("footer.location")}</h2>
            
            {/* Contact Information */}
            <div className="bg-muted p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-beboy-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">{t("footer.location")}</h4>
                    <p className="text-muted-foreground">
                      Av. Ejemplo #123, Col. Centro<br />
                      Ciudad de México, México
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-beboy-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">{t("footer.phone")}</h4>
                    <p className="text-muted-foreground">
                      +52 1 55 5555 5555<br />
                      +52 1 55 4444 4444
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-beboy-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">{t("footer.email")}</h4>
                    <p className="text-muted-foreground">
                      info@diversionesbeboys.com<br />
                      contacto@diversionesbeboys.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-[300px] bg-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120545.72792049869!2d-99.1932226071383!3d19.32248660611324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sMexico%20City%2C%20CDMX!5e0!3m2!1sen!2smx!4v1653318750458!5m2!1sen!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Diversiones Beboy's Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <ContactButtons />
    </div>
  );
};

export default Contact;
