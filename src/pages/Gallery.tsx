
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ContactButtons from "@/components/ContactButtons";

const Gallery = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample gallery categories
  const categories = [
    { id: "inflatables", name: { es: "Inflables", en: "Inflatables" } },
    { id: "tents", name: { es: "Carpas", en: "Tents" } },
    { id: "bulls", name: { es: "Toros Mecánicos", en: "Mechanical Bulls" } },
    { id: "water", name: { es: "Inflables Acuáticos", en: "Water Inflatables" } },
    { id: "events", name: { es: "Eventos", en: "Events" } },
  ];

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{t("gallery.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("gallery.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Gallery Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 rounded-full bg-muted hover:bg-beboy-yellow hover:text-beboy-black transition-colors"
            >
              {category.name[t("language") === "es" ? "es" : "en"]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Placeholder for gallery images */}
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-muted rounded-md overflow-hidden group relative hover:shadow-lg transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground">Imagen {index + 1}</span>
              </div>
              <div className="absolute inset-0 bg-beboy-purple/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="text-white font-medium bg-beboy-yellow/90 text-beboy-black px-4 py-2 rounded-md hover:bg-beboy-yellow transition-colors">
                  Ver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactButtons />
    </div>
  );
};

export default Gallery;
