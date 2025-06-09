
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
  videoUrl?: string; // Nueva propiedad para MP4 local
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
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-b from-white/90 to-card backdrop-blur-sm border border-border max-w-sm mx-auto">
  <div className="relative aspect-[9/16] w-full">
    {playing ? (
      <video
        src={video.videoUrl}
        controls
        autoPlay
        className="w-full h-full object-contain bg-black rounded-t-2xl"
        onError={() => {
          console.error("Error loading video:", video.videoUrl);
          setPlaying(false);
        }}
      >
        Tu navegador no soporta el elemento de video.
      </video>
    ) : (
      <div className="relative w-full h-full group">
        <img
          src={video.thumbnail}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beboy-purple/50 to-transparent flex items-center justify-center transition-opacity duration-300 group-hover:bg-beboy-purple/60">
          <button
            onClick={handlePlay}
            className="bg-beboy-yellow text-beboy-black p-4 rounded-full shadow-md hover:shadow-lg hover:bg-beboy-yellow/90 transition-all transform hover:scale-110"
          >
            <Play className="h-8 w-8" />
          </button>
        </div>
      </div>
    )}
  </div>
  <div className="p-5 space-y-2">
    <h3 className="text-xl font-semibold text-foreground leading-snug">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
</div>

  );
};

export default VideoCard;
