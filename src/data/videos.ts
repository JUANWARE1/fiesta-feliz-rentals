
import { Video } from "@/components/VideoCard";

export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "", // Ya no necesario para MP4
    thumbnail: "/images/logo.png", // Miniatura personalizada
    title: {
      es: "¡El Toro Mecánico que Tu Evento Necesita!",
      en: "The Mechanical Bull Your Event Needs!"
    },
    description: {
      es: "Sorprende a tus invitados con la atracción estrella de cualquier fiesta: nuestro toro mecánico. Seguro, divertido y perfecto para todas las edades. ¡Convierte tu evento en una experiencia inolvidable y llena de emoción! Reserva hoy y asegura la diversión.",
      en: "Surprise your guests with the ultimate party attraction – our mechanical bull! Safe, exciting, and perfect for all ages. Turn your event into an unforgettable and thrilling experience. Book now and guarantee the fun!"
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
