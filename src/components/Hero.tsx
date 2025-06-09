
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-br from-beboy-purple via-beboy-purple/90 to-beboy-purple/80 min-h-[80vh] flex items-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 rounded-full bg-beboy-yellow/20 animate-float"></div>
        <div className="absolute bottom-[20%] right-[5%] w-60 h-60 rounded-full bg-beboy-red/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] right-[15%] w-32 h-32 rounded-full bg-beboy-yellow/30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 mt-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Diversiones <span className="text-beboy-yellow">Beboy's</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {t("services.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-beboy-yellow hover:bg-beboy-yellow/90 text-beboy-black font-bold text-lg shadow-md"
                asChild
              >
                <Link to="/products">
                  {t("products.title")}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-bold text-lg shadow-md backdrop-blur-sm bg-white/5"
                asChild
              >
                <Link to="/contact">
                  {t("contact.title")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-beboy-yellow flex items-center justify-center animate-bounce-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/logo.png" 
                  alt="Diversiones Beboy's Logo" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
