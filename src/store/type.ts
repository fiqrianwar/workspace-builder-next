import { ImageKey } from "@/lib/images";
import { Product } from "@/lib/type";

export type Category = "desk" | "chair" | "accessory";
export type Position = "left" | "right" | "center";

export type WorkspaceState = {
  selected: {
    desk: string | null;
    chair: string | null;
    accessory: Record<Position, ImageKey | null>;
  };
  toggleCategoryItem: (category: "desk" | "chair", id: string) => void;
  toggleAccessory: (position: Position, id: string) => void;
  getSelectedProducts: () => Product[];
  getTotalPrice: () => number;
};
