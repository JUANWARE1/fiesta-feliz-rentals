
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useLanguage();
  
  const handleRentNow = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en rentar: ${product.nombre} (${product.tipo})`);
    const whatsappUrl = `https://wa.me/523320343573?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-beboy-purple text-white p-4">
        <h3 className="text-lg font-bold">{product.nombre}</h3>
      </CardHeader>
      
      {/* Imagen representativa */}
      <div className="h-48 bg-beboy-yellow/10 flex items-center justify-center">
        <img 
          src={product.imagen} 
          alt={product.nombre}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{t("products.dimensions")}</p>
            <p className="font-medium">{product.dimensiones}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{t("products.type")}</p>
            <p className="font-medium">{t(`type.${product.tipo}`)}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">{t("products.price")}</span>
            <span className="text-xl font-bold text-beboy-red">${product.precio}</span>
          </div>
          <Button 
            onClick={handleRentNow}
            className="w-full bg-beboy-purple hover:bg-beboy-purple/90 gap-2 text-white"
          >
            <MessageSquare className="h-4 w-4" />
            {t("products.rentNow")}
          </Button>

        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
