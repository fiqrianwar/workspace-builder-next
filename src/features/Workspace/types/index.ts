import { ProductType } from "@/lib/type";
import { StaticImageData } from "next/image";

export type TypeRef = {
  handleOpenModal: (position: SlotPosition) => void;
};

export type SlotPosition = "left" | "center" | "right";
export type AccessoryType = "lamp" | "monitor" | "plant";

export type WorkspaceAccessoryProps = {
  src: StaticImageData;
  width: number;
  height: number;
  className?: string | undefined;
};

export type WorkspaceProductCatalogProps = {
  title: string;
  category: ProductType;
  positions?: SlotPosition;
};
