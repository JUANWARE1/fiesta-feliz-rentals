
import { Video } from "@/components/VideoCard";

export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "", // Ya no necesario para MP4
    thumbnail: "/images/toro-mecanico.png", // Miniatura personalizada
    title: {
      es: "Inflables divertidos para tus eventos",
      en: "Fun inflatables for your events"
    },
    description: {
      es: "Descubre nuestra variedad de inflables para hacer de tu fiesta un momento inolvidable.",
      en: "Discover our variety of inflatables to make your party an unforgettable moment."
    },
    videoUrl: "/videos/video1.mp4" // Nueva propiedad para MP4 local
  },
  // {
  //   id: "2",
  //   youtubeId: "",
  //   thumbnail: "/videos/video2-thumb.jpg",
  //   title: {
  //     es: "Carpas y mobiliario para eventos",
  //     en: "Tents and furniture for events"
  //   },
  //   description: {
  //     es: "La mejor selección de carpas y mobiliario para tu evento al aire libre.",
  //     en: "The best selection of tents and furniture for your outdoor event."
  //   },
  //   videoUrl: "/videos/video2.mp4"
  // },
  // {
  //   id: "3",
  //   youtubeId: "",
  //   thumbnail: "/videos/video3-thumb.jpg",
  //   title: {
  //     es: "Toros mecánicos para diversión extrema",
  //     en: "Mechanical bulls for extreme fun"
  //   },
  //   description: {
  //     es: "La atracción que no puede faltar en tu evento. ¡Diversión garantizada!",
  //     en: "The attraction that cannot be missing at your event. Fun guaranteed!"
  //   },
  //   videoUrl: "/videos/video3.mp4"
  // },
  // {
  //   id: "4",
  //   youtubeId: "",
  //   thumbnail: "/videos/video4-thumb.jpg",
  //   title: {
  //     es: "Castillos inflables para los más pequeños",
  //     en: "Bouncy castles for the little ones"
  //   },
  //   description: {
  //     es: "Los mejores castillos inflables para que los niños se diviertan sin parar.",
  //     en: "The best bouncy castles for children to have non-stop fun."
  //   },
  //   videoUrl: "/videos/video4.mp4"
  // }
];
