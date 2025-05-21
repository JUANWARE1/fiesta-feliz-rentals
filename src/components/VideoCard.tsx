
import { Play } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export interface Video {
  id: string;
  youtubeId: string;
  thumbnail: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [playing, setPlaying] = useState(false);
  const { language } = useLanguage();

  const title = language === "es" ? video.title.es : video.title.en;
  const description = language === "es" ? video.description.es : video.description.en;

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-card transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-video">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={title}
            className="w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative w-full h-full group">
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-beboy-purple/30 flex items-center justify-center transition-opacity group-hover:bg-beboy-purple/50">
              <button
                onClick={handlePlay}
                className="bg-beboy-yellow text-beboy-black p-4 rounded-full hover:bg-beboy-yellow/90 transition-transform group-hover:scale-110"
              >
                <Play className="h-8 w-8" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
