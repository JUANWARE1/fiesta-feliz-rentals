
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const ContactButtons = ({ vertical = false }: { vertical?: boolean }) => {
  const { t } = useLanguage();
  
  const phoneNumber = ""; // Número de WhatsApp actualizado
  
  return (
    <div className={`fixed bottom-6 ${vertical ? 'right-6 flex flex-col gap-4' : 'right-6 flex gap-4'} z-50`}>
      <Button 
        size="lg" 
        className={`bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center ${vertical ? 'flex-col py-6' : 'gap-2'} shadow-lg`}
        onClick={() => window.open(`https://wa.me/${3331051698}`, '_blank')}
      >
        <MessageSquare className="h-5 w-5" />
        <span>{t("contact.whatsapp")}</span>
      </Button>
      {/* <Button 
        size="lg" 
        className={`bg-beboy-red hover:bg-beboy-red/80 text-white flex items-center ${vertical ? 'flex-col py-6' : 'gap-2'} shadow-lg`}
        onClick={() => window.open(`tel:${phoneNumber}`, '_blank')}
      >
        <Phone className="h-5 w-5" />
        <span>+52 33 2034 3573</span>
      </Button> */}
    </div>
  );
};

export default ContactButtons;
