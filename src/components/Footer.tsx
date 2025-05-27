
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-4">
              Diversiones Beboy's - {t("services.subtitle")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beboy-purple hover:text-beboy-red transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beboy-purple hover:text-beboy-red transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beboy-purple hover:text-beboy-red transition-colors"
              >
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t("nav.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-beboy-red transition-colors">
                  {t("services.tents")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-beboy-red transition-colors">
                  {t("services.inflatables")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-beboy-red transition-colors">
                  {t("services.rockolas")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-beboy-red transition-colors">
                  {t("services.bulls")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-beboy-red transition-colors">
                  {t("services.water")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">{t("contact.title")}</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin size={20} className="flex-shrink-0 text-beboy-red" />
                <span>Chapala Jal, México.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0 text-beboy-red" />
                <a href="tel:+5215555555555" className="hover:text-beboy-red transition-colors">
                  +52 
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0 text-beboy-red" />
                <a href="mailto:info@diversionesbeboys.com" className="hover:text-beboy-red transition-colors">
                  info@diversionesbeboys.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-beboy-purple/20 pt-6 mt-6 text-center">
          <p className="text-sm">
            &copy; {currentYear} Diversiones Beboy's. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
