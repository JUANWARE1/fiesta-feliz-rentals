
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "@/components/ServiceCard";
import ContactButtons from "@/components/ContactButtons";
import { Tent, Umbrella, Music, Target, Wine, Droplets } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Tent size={32} />,
      title: t("services.tents"),
      description: t("services.tents.desc"),
      details: [
        "Diferentes tamaños disponibles",
        "Ideales para fiestas, eventos corporativos y reuniones familiares",
        "Instalación incluida",
        "Opciones con o sin paredes laterales"
      ]
    },
    {
      icon: <Umbrella size={32} />,
      title: t("services.inflatables"),
      description: t("services.inflatables.desc"),
      details: [
        "Gran variedad de temáticas",
        "Seguros y resistentes",
        "Para todas las edades",
        "Incluyen supervisión durante el evento"
      ]
    },
    {
      icon: <Music size={32} />,
      title: t("services.rockolas"),
      description: t("services.rockolas.desc"),
      details: [
        "Miles de canciones disponibles",
        "Fáciles de usar",
        "Sonido de alta calidad",
        "Personalizables según el evento"
      ]
    },
    {
      icon: <Target size={32} />,
      title: t("services.bulls"),
      description: t("services.bulls.desc"),
      details: [
        "Diferentes niveles de dificultad",
        "Incluye operador capacitado",
        "Área acolchada para mayor seguridad",
        "Ideal para eventos corporativos y fiestas"
      ]
    },
    {
      icon: <Wine size={32} />,
      title: t("services.drinks"),
      description: t("services.drinks.desc"),
      details: [
        "Servicio de barras móviles",
        "Bartenders profesionales",
        "Menús personalizados",
        "Opciones con y sin alcohol"
      ]
    },
    {
      icon: <Droplets size={32} />,
      title: t("services.water"),
      description: t("services.water.desc"),
      details: [
        "Ideales para días calurosos",
        "Toboganes acuáticos",
        "Piscinas inflables",
        "Con medidas de seguridad incluidas"
      ]
    },
  ];

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{t("services.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("services.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="mb-4 flex-1"
              />
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Características:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ContactButtons />
    </div>
  );
};

export default Services;
