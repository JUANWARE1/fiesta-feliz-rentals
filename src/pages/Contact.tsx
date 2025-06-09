
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";
import ContactButtons from "@/components/ContactButtons";
import { Phone, Mail } from "lucide-react";

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
            <h2 className="text-2xl font-bold mb-6">{t("Contactanos")}</h2>
            
            {/* Contact Information */}
            <div className="bg-muted p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-beboy-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">{t("footer.phone")}</h4>
                    <p className="text-muted-foreground">
                      +52 33 3105 1698<br />
                    
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-beboy-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">{t("footer.email")}</h4>
                    <p className="text-muted-foreground">
                    diversiones_beboys@hotmail.com<br />
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactButtons />
    </div>
  );
};

export default Contact;
