
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import ContactButtons from "@/components/ContactButtons";
import { Star } from "lucide-react";

const Testimonials = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{t("testimonials.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("testimonials.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 text-beboy-yellow mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill={i < testimonial.rating ? "#fff701" : "none"}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-beboy-yellow" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="mb-6">
                <p className="italic text-lg">"{testimonial.text[language as keyof typeof testimonial.text]}"</p>
              </div>
              <div className="border-t border-muted pt-4">
                <h4 className="font-bold">{testimonial.name}</h4>
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                  <span className="text-sm font-medium">{testimonial.event[language as keyof typeof testimonial.event]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ContactButtons />
    </div>
  );
};

export default Testimonials;
