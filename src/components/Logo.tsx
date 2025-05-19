
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
    >
      <img
        src="/lovable-uploads/d05cddfb-b883-4c18-9e47-d84cd8aa0b10.png" 
        alt="Diversiones Beboy's"
        className="h-12 w-12 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-none">Diversiones</span>
        <span className="text-xl font-bold text-beboy-red leading-none">Beboy's</span>
      </div>
    </Link>
  );
};

export default Logo;
