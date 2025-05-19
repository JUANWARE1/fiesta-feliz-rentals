
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className = "" }: ServiceCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 text-beboy-red bg-beboy-yellow/20 p-3 rounded-full">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
