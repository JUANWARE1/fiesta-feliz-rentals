
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactButtons from "@/components/ContactButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { Star, MapPin, Clock } from "lucide-react";

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
      {[
        "/gallery/1.png",
        "/gallery/2.png",
        "/gallery/3.png",
        "/gallery/4.png",
        "/gallery/5.png",
        "/gallery/6.png",
        "/gallery/7.png",
        "/gallery/8.png",
      ].map((src, index) => (
        <div
          key={index}
          className="aspect-square rounded-lg overflow-hidden group relative"
        >
          <img
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
         
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
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("testimonials.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-card rounded-lg shadow-md p-6 flex flex-col h-full"
              >
                <div className="flex items-center gap-1 text-beboy-yellow mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="flex-grow">
                  <p className="italic text-muted-foreground mb-4">
                    "{language === 'es' ? testimonial.text.es : testimonial.text.en}"
                  </p>
                </blockquote>
                <div className="mt-4 pt-4 border-t border-muted">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'es' ? testimonial.event.es : testimonial.event.en}
                  </p>
                </div>
              </div>
            ))}
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
      <div>
        {/* Título con ícono: Ubicación */}
        <div className="flex items-center gap-2 mb-2">
          <MapPin size={24} className="text-beboy-red flex-shrink-0" />
          <h4 className="font-medium text-xl">{t("footer.location")}</h4>
        </div>

        <p className="text-muted-foreground mb-4">
          Calle Venustiano Carranza 2-24<br />
          Chapala Jal. México.
        </p>

        {/* Título con ícono: Horarios */}
        <div className="flex items-center gap-2 mb-2 mt-6">
          <Clock size={24} className="text-beboy-red flex-shrink-0" />
          <h4 className="font-medium text-xl">{t("footer.horarios")}</h4>
        </div>

        <ul className="text-muted-foreground list-disc list-inside">
          <li>Lunes a Viernes: 9:00 a.m. – 6:00 p.m.</li>
          <li>Sábado: 10:00 a.m. – 2:00 p.m.</li>
          <li>Domingo: Cerrado</li>
        </ul>
      </div>
    </div>
  </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] bg-muted shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0569610005405!2d-103.1925494249894!3d20.29790928117481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f40b15e3e2c85%3A0xa10edd0aa4f1f15b!2sCalle%20Venustiano%20Carranza%202-24%2C%20Chapala%20Centro%2C%2045900%20Chapala%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1747981009491!5m2!1ses-419!2smx" 
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
