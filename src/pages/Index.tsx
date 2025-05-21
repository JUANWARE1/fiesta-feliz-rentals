
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButtons from "@/components/ContactButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { Star, MapPin } from "lucide-react";

const Index = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      
      {/* Gallery Preview Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("gallery.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("gallery.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Sample Images - Replace with actual gallery images */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-square bg-beboy-purple/10 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-beboy-yellow/20 text-beboy-purple">
                  Imagen {index}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/gallery">{t("gallery.title")}</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("footer.location")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="flex items-start gap-4 mb-4">
                <MapPin size={24} className="text-beboy-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-xl">{t("footer.location")}</h4>
                  <p className="text-muted-foreground">
                    Av. Ejemplo #123, Col. Centro<br />
                    Ciudad de México, México
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] bg-muted shadow-md">
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
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/contact">{t("contact.title")}</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Preview */}
      <section className="py-20 bg-beboy-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
          <Button 
            size="lg" 
            className="bg-beboy-yellow hover:bg-beboy-yellow/90 text-beboy-black font-bold shadow-md"
            asChild
          >
            <Link to="/contact">
              {t("contact.title")}
            </Link>
          </Button>
        </div>
      </section>
      
      <ContactButtons />
    </div>
  );
};

export default Index;
