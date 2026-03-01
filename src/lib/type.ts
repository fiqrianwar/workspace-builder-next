import { StaticImageData } from "next/image";

export type SlotPosition = "left" | "center" | "right";
export type AccessoryType = "lamp" | "monitor" | "plant";
export type ProductType = "desk" | "chair" | "accessory";

export type Product = {
  id: string;
  name: string;
  category: ProductType;
  price: number;
  image: StaticImageData;
  description: string;
  active: null;
};
