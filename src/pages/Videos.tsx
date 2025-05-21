
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";
import ContactButtons from "@/components/ContactButtons";
import { Youtube } from "lucide-react";

const Videos = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="bg-beboy-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <Youtube className="h-10 w-10" />
            <h1 className="text-4xl font-bold text-center">
              {t("videos.title")}
            </h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-center">
            {t("videos.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
      
      <ContactButtons />
    </div>
  );
};

export default Videos;
