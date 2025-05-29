
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
        t("tents.feature1"),
        t("tents.feature2"),
        t("tents.feature3"),
        t("tents.feature4")
      ]
    },
    {
      icon: <Umbrella size={32} />,
      title: t("services.inflatables"),
      description: t("services.inflatables.desc"),
      details: [
        t("inflatables.feature1"),
        t("inflatables.feature2"),
        t("inflatables.feature3"),
        t("inflatables.feature4")
      ]
    },
    {
      icon: <Music size={32} />,
      title: t("services.rockolas"),
      description: t("services.rockolas.desc"),
      details: [
        t("rockolas.feature1"),
        t("rockolas.feature2"),
        t("rockolas.feature3"),
        t("rockolas.feature4")
      ]
    },
    {
      icon: <Target size={32} />,
      title: t("services.bulls"),
      description: t("services.bulls.desc"),
      details: [
        t("bulls.feature1"),
        t("bulls.feature2"),
        t("bulls.feature3"),
        t("bulls.feature4")
      ]
    },
    {
      icon: <Wine size={32} />,
      title: t("services.drinks"),
      description: t("services.drinks.desc"),
      details: [
        t("drinks.feature1"),
        t("drinks.feature2"),
        t("drinks.feature3"),
        t("drinks.feature4")
      ]
    },
    {
      icon: <Droplets size={32} />,
      title: t("services.water"),
      description: t("services.water.desc"),
      details: [
        t("water.feature1"),
        t("water.feature2"),
        t("water.feature3"),
        t("water.feature4")
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
                <h4 className="font-medium mb-2">{t("features.title")}</h4>
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
