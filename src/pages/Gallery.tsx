import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ContactButtons from "@/components/ContactButtons";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";


const Gallery = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    {
      src: "/gallery/1.png",
      title: "Descripción de la imagen 1",
    },
    {
      src: "/gallery/2.png",
      title: "Descripción de la imagen 2",
    },
    {
      src: "/gallery/3.png",
      title: "Descripción de la imagen 3",
    },
    {
      src: "/gallery/4.png",
      title: "Descripción de la imagen 4",
    },
    {
      src: "/gallery/5.png",
      title: "Descripción de la imagen 5",
    },
    {
      src: "/gallery/6.png",
      title: "Descripción de la imagen 6",
    },
    {
      src: "/gallery/7.png",
      title: "Descripción de la imagen 7",
    },
    {
      src: "/gallery/8.png",
      title: "Descripción de la imagen 8",
    },
    {
      src:"/gallery/9.png",
      title: "Descripción de la imagen 9",
    },
    {
      src: "/gallery/10.png",
      title: "Descripción de la imagen 10",
    },
    {
      src: "/gallery/11.png",
      title: "Descripción de la imagen 11",
    },
    {
      src: "/gallery/12.png",
      title: "Descripción de la imagen 12",
    },
  ];

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            {t("gallery.title")}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("gallery.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="aspect-square bg-muted rounded-md overflow-hidden group relative hover:shadow-lg transition-all"
            >
              <img
                src={slide.src}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-beboy-purple/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}
                  className="text-white font-medium bg-beboy-yellow/90 text-beboy-black px-4 py-2 rounded-md hover:bg-beboy-yellow transition-colors"
                >
                  Ver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactButtons />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Captions]}
      />
    </div>
  );
};

export default Gallery;
