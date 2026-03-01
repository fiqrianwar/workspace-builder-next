import { images } from "./images";
import { Product } from "./type";

export const products: Product[] = [
  {
    id: "desk01",
    name: "Modern Desk",
    category: "desk",
    price: 199,
    image: images.desk01,
    description: "Modern workspace desk.",
    active: null,
  },
  {
    id: "desk02",
    name: "Minimal Desk",
    category: "desk",
    price: 199,
    image: images.desk02,
    description: "Minimalist workspace desk.",
    active: null,
  },

  {
    id: "chair01",
    name: "Ergonomic Chair ",
    category: "chair",
    price: 199,
    image: images.chair01,
    description: "Ergonomic red",
    active: null,
  },
  {
    id: "chair02",
    name: "Ergonomic Chair",
    category: "chair",
    price: 220,
    image: images.chair02,
    description: "Ergonomic black",
    active: null,
  },

  {
    id: "lamp",
    name: "Lamp",
    category: "accessory",
    price: 120,
    image: images.lamp,
    description: "Working Lamp",
    active: null,
  },

  {
    id: "monitor",
    name: "Monitor",
    category: "accessory",
    price: 220,
    image: images.monitor,
    description: "Working monitor",
    active: null,
  },
  {
    id: "plant",
    name: "Plant",
    category: "accessory",
    price: 80,
    image: images.plant,
    description: "Lamp setup",
    active: null,
  },
];
