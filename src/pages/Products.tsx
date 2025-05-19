
import { useState, useMemo, useEffect } from "react";
import { products, getProductTypes } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ContactButtons from "@/components/ContactButtons";

const Products = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const productTypes = useMemo(() => ["all", ...getProductTypes()], []);
  
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "all" || product.tipo === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">{t("products.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("products.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder={t("products.search")}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center text-sm text-muted-foreground mr-2">
              {t("products.filter")}:
            </span>
            {productTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
                className="capitalize"
              >
                {type === "all" ? t("products.all") : t(`type.${type}`)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
      
      <ContactButtons />
    </div>
  );
};

export default Products;
