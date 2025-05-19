
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductsSection from "@/components/ProductsSection";
import ContactButtons from "@/components/ContactButtons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

const Index = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <ProductsSection />
      
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
      
      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("testimonials.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex gap-1 text-beboy-yellow mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < testimonial.rating ? "#fff701" : "none"}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-beboy-yellow" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.text[language as keyof typeof testimonial.text]}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event[language as keyof typeof testimonial.event]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/testimonials">{t("testimonials.title")}</Link>
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
            className="bg-beboy-yellow hover:bg-beboy-yellow/90 text-beboy-black font-bold"
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
