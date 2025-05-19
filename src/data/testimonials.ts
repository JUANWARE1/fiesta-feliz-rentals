
export interface Testimonial {
  id: number;
  name: string;
  text: {
    es: string;
    en: string;
  };
  rating: number;
  date: string;
  event: {
    es: string;
    en: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Laura Sánchez",
    text: {
      es: "¡Contratamos el castillo inflable para el cumpleaños de mi hijo y fue todo un éxito! Los niños estuvieron entretenidos durante horas y el servicio fue excelente. El personal llegó puntual y configuró todo rápidamente.",
      en: "We rented the inflatable castle for my son's birthday and it was a total success! The kids were entertained for hours and the service was excellent. The staff arrived on time and set everything up quickly."
    },
    rating: 5,
    date: "2023-09-15",
    event: {
      es: "Fiesta de Cumpleaños",
      en: "Birthday Party"
    }
  },
  {
    id: 2,
    name: "Miguel Ramírez",
    text: {
      es: "Utilizamos los servicios de Diversiones Beboy's para un evento corporativo y superaron nuestras expectativas. Las rockolas y los inflables para adultos fueron la sensación. Definitivamente los recomendaré y volveré a contratarlos.",
      en: "We used Diversiones Beboy's services for a corporate event and they exceeded our expectations. The jukeboxes and adult inflatables were a sensation. I will definitely recommend them and hire them again."
    },
    rating: 5,
    date: "2023-08-22",
    event: {
      es: "Evento Corporativo",
      en: "Corporate Event"
    }
  },
  {
    id: 3,
    name: "Sofía González",
    text: {
      es: "El toro mecánico fue la estrella de nuestra fiesta de graduación. El equipo fue muy profesional y se aseguró de que todo funcionara perfectamente. La calidad del inflable era excelente y todos se divirtieron mucho.",
      en: "The mechanical bull was the star of our graduation party. The team was very professional and made sure everything worked perfectly. The quality of the inflatable was excellent and everyone had a great time."
    },
    rating: 5,
    date: "2023-10-05",
    event: {
      es: "Fiesta de Graduación",
      en: "Graduation Party"
    }
  },
  {
    id: 4,
    name: "Roberto Díaz",
    text: {
      es: "Alquilamos una carpa e inflables acuáticos para una fiesta familiar y fue una experiencia increíble. El servicio al cliente fue excelente, respondieron todas nuestras preguntas y se adaptaron a nuestras necesidades.",
      en: "We rented a tent and water inflatables for a family party and it was an amazing experience. The customer service was excellent, they answered all our questions and adapted to our needs."
    },
    rating: 4,
    date: "2023-07-30",
    event: {
      es: "Fiesta Familiar",
      en: "Family Party"
    }
  },
  {
    id: 5,
    name: "Elena Torres",
    text: {
      es: "Contratamos varios inflables para un evento escolar y quedamos muy satisfechos. Los niños se divirtieron muchísimo y los padres estaban encantados. El personal fue amable y atento en todo momento.",
      en: "We hired several inflatables for a school event and were very satisfied. The children had a lot of fun and the parents were delighted. The staff was friendly and attentive at all times."
    },
    rating: 5,
    date: "2023-11-10",
    event: {
      es: "Evento Escolar",
      en: "School Event"
    }
  }
];
