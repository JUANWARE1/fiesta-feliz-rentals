
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant="ghost"
        size="sm"
        className={`text-sm ${language === "es" ? "bg-muted font-bold" : ""}`}
        onClick={() => setLanguage("es")}
      >
        ES
      </Button>
      <span className="text-muted-foreground">/</span>
      <Button
        variant="ghost"
        size="sm"
        className={`text-sm ${language === "en" ? "bg-muted font-bold" : ""}`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
