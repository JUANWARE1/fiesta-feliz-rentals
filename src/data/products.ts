
export interface Product {
  nombre: string;
  dimensiones: string;
  precio: number;
  tipo: string;
}

export const products: Product[] = [
  { "nombre": "Candy House", "dimensiones": "3 x 3 mts", "precio": 500, "tipo": "brincolín" },
  { "nombre": "Castillo Chico Velcros Intercambiables Niña", "dimensiones": "4 x 4 mts", "precio": 500, "tipo": "brincolín" },
  { "nombre": "Paw Patrol", "dimensiones": "4.5 x 4.5 mts", "precio": 500, "tipo": "brincolín" },
  { "nombre": "Minions", "dimensiones": "4.5 x 4.5 mts", "precio": 500, "tipo": "brincolín" },
  { "nombre": "Balones", "dimensiones": "5 x 5 mts", "precio": 600, "tipo": "brincolín" },
  { "nombre": "Escaladora Sencilla", "dimensiones": "5 x 6 mts", "precio": 600, "tipo": "escaladora" },
  { "nombre": "Mickey Mouse", "dimensiones": "5.5 x 5.5 mts", "precio": 600, "tipo": "brincolín" },
  { "nombre": "Spiderman", "dimensiones": "5 x 5 mts", "precio": 600, "tipo": "brincolín" },
  { "nombre": "Crayolas", "dimensiones": "6 x 6 mts", "precio": 700, "tipo": "brincolín" },
  { "nombre": "Sonic", "dimensiones": "6 x 4 mts", "precio": 700, "tipo": "brincolín con resbaladilla" },
  { "nombre": "Barbie", "dimensiones": "4 x 4.5 x 4", "precio": 700, "tipo": "brincolín" },
  { "nombre": "Escalador Paw Patrol", "dimensiones": "5 x 4.5 x 5", "precio": 700, "tipo": "escaladora" },
  { "nombre": "Castillo Nuevo", "dimensiones": "5 x 7.5 mts", "precio": 800, "tipo": "brincolín con resbaladilla" },
  { "nombre": "Unicornio", "dimensiones": "5.5 x 7.5 mts", "precio": 800, "tipo": "brincolín con resbaladilla" },
  { "nombre": "Escaladora Corral", "dimensiones": "5 x 7.5 mts", "precio": 800, "tipo": "escaladora" },
  { "nombre": "Escaladora Palmitas", "dimensiones": "5.5 x 7.5 mts", "precio": 800, "tipo": "escaladora" },
  { "nombre": "Castillo Grande de Princesas", "dimensiones": "5.5 x 7.5 mts", "precio": 800, "tipo": "brincolín con resbaladilla" },
  { "nombre": "Escalador Colores", "dimensiones": "4 x 7.5 x 4", "precio": 900, "tipo": "escaladora" },
  { "nombre": "Escalador Bonzy", "dimensiones": "5.5 x 11 mts", "precio": 1200, "tipo": "escaladora" },
  { "nombre": "Escalador Mix Wedding", "dimensiones": "4 x 7.5 x 4", "precio": 1500, "tipo": "escaladora" },
  { "nombre": "Escalador Interactivo", "dimensiones": "4 x 15 mts", "precio": 1800, "tipo": "escaladora" },
  { "nombre": "Toro Mecánico Grande", "dimensiones": "5.5 x 5.5 mts", "precio": 2500, "tipo": "juego mecánico" },
  { "nombre": "Tiburón Acuático", "dimensiones": "5.5 x 15 x 7 mts", "precio": 3000, "tipo": "inflable acuático" }
];

export const getProductTypes = (): string[] => {
  const types = products.map(product => product.tipo);
  return Array.from(new Set(types));
};
