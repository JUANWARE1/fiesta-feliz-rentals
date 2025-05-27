
export interface Product {
  nombre: string;
  dimensiones: string;
  precio: number;
  tipo: string;
  imagen: string; 
}

export const products: Product[] = [
  { "nombre": "Candy House", "dimensiones": "3 x 3 mts", "precio": 500, "tipo": "brincolín", imagen:"/images/candy-house.png"},
  { "nombre": "Castillo Chico Velcros Intercambiables Niña", "dimensiones": "4 x 4 mts", "precio": 500, "tipo": "brincolín", imagen:"/images/niña.png" },
  { "nombre": "Paw Patrol", "dimensiones": "4.5 x 4.5 mts", "precio": 500, "tipo": "brincolín", imagen:"/images/paw-patrol.png" },
  { "nombre": "Minions", "dimensiones": "4.5 x 4.5 mts", "precio": 500, "tipo": "brincolín", imagen:"/images/minion.png" },
  { "nombre": "Balones", "dimensiones": "5 x 5 mts", "precio": 600, "tipo": "brincolín", imagen:"/images/balones.png" },
  { "nombre": "Escaladora Sencilla", "dimensiones": "5 x 6 mts", "precio": 600, "tipo": "escaladora", imagen:"/images/escala-sencilla.png" },
  { "nombre": "Mickey Mouse", "dimensiones": "5.5 x 5.5 mts", "precio": 600, "tipo": "brincolín", imagen:"/images/mickey-mouse.png" },
  { "nombre": "Spiderman", "dimensiones": "5 x 5 mts", "precio": 600, "tipo": "brincolín", imagen:"/images/spiderman.png" },
  { "nombre": "Crayolas", "dimensiones": "6 x 6 mts", "precio": 700, "tipo": "brincolín",  imagen:"/images/crayolas.png"  },
  { "nombre": "Sonic", "dimensiones": "6 x 4 mts", "precio": 700, "tipo": "brincolín con resbaladilla", imagen:"/images/sonic.png"},
  { "nombre": "Barbie", "dimensiones": "4 x 4.5 x 4", "precio": 700, "tipo": "brincolín", imagen:"/images/barbie.png" },
  { "nombre": "Escalador Paw Patrol", "dimensiones": "5 x 4.5 x 5", "precio": 700, "tipo": "escaladora", imagen:"/images/esc-pawpatrol.png" },
  { "nombre": "Castillo Nuevo", "dimensiones": "5 x 7.5 mts", "precio": 800, "tipo": "brincolín con resbaladilla", imagen:"/images/castillo-nuevo.png"  },
  { "nombre": "Unicornio", "dimensiones": "5.5 x 7.5 mts", "precio": 800, "tipo": "brincolín con resbaladilla", imagen:"/images/unicornio.png"},
  { "nombre": "Escaladora Corral", "dimensiones": "5 x 7.5 mts", "precio": 800, "tipo": "escaladora", imagen:"/images/esc-corral.png"},
  { "nombre": "Escaladora Palmitas", "dimensiones": "5.5 x 7.5 mts", "precio": 800, "tipo": "escaladora", imagen:"/images/esc-palmitas.png"},
  { "nombre": "Castillo Grande de Princesas", "dimensiones": "5.5 x 7.5 mts", "precio": 800, "tipo": "brincolín con resbaladilla", imagen:"/images/castillo-princesas.png" },
  { "nombre": "Escalador Colores", "dimensiones": "4 x 7.5 x 4", "precio": 900, "tipo": "escaladora",  imagen:"/images/escalador-colores.png" },
  { "nombre": "Escalador Bonzy", "dimensiones": "5.5 x 11 mts", "precio": 1200, "tipo": "escaladora", imagen:"/images/escalador bonzy.png" },
  { "nombre": "Escalador Mix Wedding", "dimensiones": "4 x 7.5 x 4", "precio": 1500, "tipo": "escaladora", imagen:"/images/escalador wedding.png"},
  { "nombre": "Escalador Interactivo", "dimensiones": "4 x 15 mts", "precio": 1800, "tipo": "escaladora", imagen:"/images/escalador interactivo.png" },
  { "nombre": "Toro Mecánico Grande", "dimensiones": "5.5 x 5.5 mts", "precio": 2500, "tipo": "juego mecánico", imagen:"/images/toro-mecanico.png"},
  { "nombre": "Tiburón Acuático", "dimensiones": "5.5 x 15 x 7 mts", "precio": 3000, "tipo": "inflable acuático", imagen:"/images/tiburon-acuatico.png"}
];

export const getProductTypes = (): string[] => {
  const types = products.map(product => product.tipo);
  return Array.from(new Set(types));
};
