import { products } from "@/lib/data";
import { create } from "zustand";
import { WorkspaceState } from "./type";

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  selected: {
    desk: null,
    chair: null,
    accessory: {
      left: null,
      right: null,
      center: null,
    },
  },

  toggleCategoryItem: (category, id) =>
    set((state) => {
      const current = state.selected[category];

      return {
        selected: {
          ...state.selected,
          [category]: current === id ? null : id,
        },
      };
    }),

  toggleAccessory: (position, id) =>
    set((state) => {
      const current = state.selected.accessory[position];

      const alreadyUsedPosition = Object.entries(state.selected.accessory).find(
        ([pos, value]) => value === id && pos !== position,
      );

      if (alreadyUsedPosition) {
        return state;
      }

      return {
        selected: {
          ...state.selected,
          accessory: {
            ...state.selected.accessory,
            [position]: current === id ? null : id,
          },
        },
      };
    }),

  getSelectedProducts: () => {
    const { selected } = get();

    const allIds = [
      selected.desk,
      selected.chair,
      ...Object.values(selected.accessory),
    ].filter(Boolean) as string[];

    return products.filter((p) => allIds.includes(p.id));
  },

  getTotalPrice: () => {
    const selectedProducts = get().getSelectedProducts();
    return selectedProducts.reduce((sum, product) => sum + product.price, 0);
  },
}));
