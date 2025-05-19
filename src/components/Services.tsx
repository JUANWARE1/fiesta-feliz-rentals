
import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "./ServiceCard";
import { Tent, Umbrella, Music, Target, Wine, Droplets } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Tent size={32} />,
      title: t("services.tents"),
      description: t("services.tents.desc"),
    },
    {
      icon: <Umbrella size={32} />,
      title: t("services.inflatables"),
      description: t("services.inflatables.desc"),
    },
    {
      icon: <Music size={32} />,
      title: t("services.rockolas"),
      description: t("services.rockolas.desc"),
    },
    {
      icon: <Target size={32} />,
      title: t("services.bulls"),
      description: t("services.bulls.desc"),
    },
    {
      icon: <Wine size={32} />,
      title: t("services.drinks"),
      description: t("services.drinks.desc"),
    },
    {
      icon: <Droplets size={32} />,
      title: t("services.water"),
      description: t("services.water.desc"),
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
