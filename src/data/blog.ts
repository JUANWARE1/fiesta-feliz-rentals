
export interface BlogPost {
  id: string;
  title: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  content: {
    es: string;
    en: string;
  };
  author: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "top-inflatables",
    title: {
      es: "Los 5 Mejores Inflables para Fiestas Infantiles",
      en: "Top 5 Inflatables for Children's Parties"
    },
    excerpt: {
      es: "Descubre cuáles son los inflables más populares y por qué los niños los adoran.",
      en: "Discover the most popular inflatables and why children love them."
    },
    content: {
      es: `<p>Los inflables se han convertido en un elemento imprescindible en las fiestas infantiles. No solo mantienen a los niños entretenidos durante horas, sino que también ofrecen un espacio controlado donde pueden gastar energía de forma segura.</p>
      
      <h3>1. Castillo de Princesas</h3>
      <p>Perfecto para fiestas temáticas, este inflable atrae a las niñas con sus colores vibrantes y su diseño de cuento de hadas.</p>
      
      <h3>2. Inflable de Superhéroes</h3>
      <p>Con diseños de Spider-Man, Batman y otros superhéroes, estos inflables son ideales para niños que sueñan con tener superpoderes.</p>
      
      <h3>3. Toboganes Acuáticos</h3>
      <p>Perfectos para días calurosos, estos inflables combinan agua y diversión para mantener a los niños refrescados.</p>
      
      <h3>4. Combos Multiactividad</h3>
      <p>Estos inflables incluyen áreas para saltar, escaladores y toboganes, ofreciendo diversión variada en un solo espacio.</p>
      
      <h3>5. Inflables Temáticos de Personajes</h3>
      <p>Ya sea Minions, Paw Patrol o cualquier personaje popular, estos inflables temáticos añaden un toque especial a la fiesta.</p>
      
      <p>Recuerda siempre supervisar a los niños cuando están usando inflables y seguir las recomendaciones de capacidad y edad.</p>`,
      en: `<p>Inflatables have become an essential element in children's parties. They not only keep children entertained for hours but also offer a controlled space where they can spend energy safely.</p>
      
      <h3>1. Princess Castle</h3>
      <p>Perfect for themed parties, this inflatable attracts girls with its vibrant colors and fairy tale design.</p>
      
      <h3>2. Superhero Inflatable</h3>
      <p>With designs of Spider-Man, Batman, and other superheroes, these inflatables are ideal for children who dream of having superpowers.</p>
      
      <h3>3. Water Slides</h3>
      <p>Perfect for hot days, these inflatables combine water and fun to keep kids refreshed.</p>
      
      <h3>4. Multi-Activity Combos</h3>
      <p>These inflatables include areas for jumping, climbers, and slides, offering varied fun in a single space.</p>
      
      <h3>5. Character-Themed Inflatables</h3>
      <p>Whether it's Minions, Paw Patrol, or any popular character, these themed inflatables add a special touch to the party.</p>
      
      <p>Always remember to supervise children when they are using inflatables and follow capacity and age recommendations.</p>`
    },
    author: "María López",
    date: "2023-11-15",
    image: "https://images.unsplash.com/photo-1604014059310-fc4b29bed88f?q=80&w=2070"
  },
  {
    id: "organizing-events",
    title: {
      es: "Cómo Organizar un Evento Exitoso para Niños",
      en: "How to Organize a Successful Event for Children"
    },
    excerpt: {
      es: "Consejos prácticos para planificar fiestas infantiles perfectas y sin estrés.",
      en: "Practical tips for planning perfect, stress-free children's parties."
    },
    content: {
      es: `<p>Organizar una fiesta infantil puede parecer abrumador, pero con la planificación adecuada, puedes crear un evento memorable sin estrés.</p>
      
      <h3>1. Planifica con Anticipación</h3>
      <p>Comienza a planificar al menos un mes antes. Esto te dará tiempo para reservar el lugar, los servicios y enviar invitaciones.</p>
      
      <h3>2. Elige un Tema</h3>
      <p>Un tema hace que la planificación sea más sencilla y coherente, desde decoraciones hasta actividades.</p>
      
      <h3>3. Considera el Espacio</h3>
      <p>Asegúrate de tener suficiente espacio para todas las actividades planificadas, especialmente si alquilas inflables o juegos grandes.</p>
      
      <h3>4. Planifica Actividades Variadas</h3>
      <p>Ten un plan de actividades que mantengan a los niños entretenidos. Los inflables son una excelente opción, pero también considera juegos organizados, manualidades o un show infantil.</p>
      
      <h3>5. No Olvides la Alimentación</h3>
      <p>Ofrece opciones de comida que sean fáciles de comer y populares entre los niños. Considera también las alergias alimentarias.</p>
      
      <p>Con estos consejos básicos, podrás organizar una fiesta que los niños recordarán por mucho tiempo.</p>`,
      en: `<p>Organizing a children's party can seem overwhelming, but with proper planning, you can create a memorable event without stress.</p>
      
      <h3>1. Plan Ahead</h3>
      <p>Start planning at least a month in advance. This will give you time to book the venue, services, and send invitations.</p>
      
      <h3>2. Choose a Theme</h3>
      <p>A theme makes planning easier and more coherent, from decorations to activities.</p>
      
      <h3>3. Consider the Space</h3>
      <p>Make sure you have enough space for all planned activities, especially if you rent inflatables or large games.</p>
      
      <h3>4. Plan Varied Activities</h3>
      <p>Have a plan of activities that keep the children entertained. Inflatables are an excellent option, but also consider organized games, crafts, or a children's show.</p>
      
      <h3>5. Don't Forget the Food</h3>
      <p>Offer food options that are easy to eat and popular among children. Also consider food allergies.</p>
      
      <p>With these basic tips, you can organize a party that children will remember for a long time.</p>`
    },
    author: "Carlos Rodríguez",
    date: "2023-10-28",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070"
  },
  {
    id: "inflatable-safety",
    title: {
      es: "Seguridad en Inflables: Lo que Debes Saber",
      en: "Inflatable Safety: What You Need to Know"
    },
    excerpt: {
      es: "Guía esencial sobre medidas de seguridad para el uso de inflables en eventos.",
      en: "Essential guide on safety measures for the use of inflatables at events."
    },
    content: {
      es: `<p>Los inflables proporcionan diversión para todas las edades, pero es importante asegurarse de que se utilicen de manera segura.</p>
      
      <h3>1. Supervisión Constante</h3>
      <p>Siempre debe haber un adulto responsable supervisando a los niños cuando usan inflables.</p>
      
      <h3>2. Respeta los Límites de Capacidad</h3>
      <p>Cada inflable tiene un límite de peso y capacidad. Excederlo puede ser peligroso y dañar el inflable.</p>
      
      <h3>3. Agrupa por Tamaño y Edad</h3>
      <p>Para evitar accidentes, los niños de tamaño y edad similares deben usar el inflable al mismo tiempo.</p>
      
      <h3>4. Verifica el Anclaje</h3>
      <p>Asegúrate de que el inflable esté correctamente anclado para evitar que se vuele con vientos fuertes.</p>
      
      <h3>5. Reglas Básicas</h3>
      <p>No se deben permitir volteretas, luchas o cualquier actividad brusca dentro del inflable. Tampoco comida, bebida o objetos afilados.</p>
      
      <p>Siguiendo estas simples reglas, podrás garantizar que la experiencia con inflables sea divertida y segura para todos.</p>`,
      en: `<p>Inflatables provide fun for all ages, but it's important to make sure they're used safely.</p>
      
      <h3>1. Constant Supervision</h3>
      <p>There should always be a responsible adult supervising children when they use inflatables.</p>
      
      <h3>2. Respect Capacity Limits</h3>
      <p>Each inflatable has a weight and capacity limit. Exceeding it can be dangerous and damage the inflatable.</p>
      
      <h3>3. Group by Size and Age</h3>
      <p>To prevent accidents, children of similar size and age should use the inflatable at the same time.</p>
      
      <h3>4. Check Anchoring</h3>
      <p>Make sure the inflatable is properly anchored to prevent it from flying away in strong winds.</p>
      
      <h3>5. Basic Rules</h3>
      <p>Somersaults, wrestling, or any rough activity should not be allowed inside the inflatable. Neither should food, drink, or sharp objects.</p>
      
      <p>By following these simple rules, you can ensure that the experience with inflatables is fun and safe for everyone.</p>`
    },
    author: "Ana Martínez",
    date: "2023-12-05",
    image: "https://images.unsplash.com/photo-1633218388467-310e41a9d1f0?q=80&w=1974"
  }
];
