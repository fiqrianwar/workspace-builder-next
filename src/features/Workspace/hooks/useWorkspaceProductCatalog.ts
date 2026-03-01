import { useMemo } from "react";
import { ProductType } from "@/lib/type";
import { AccessoryType, SlotPosition } from "../types";
import { useWorkspaceStore } from "@/store/useDeskStore";
import { Category } from "@/store/type";
import { products } from "@/lib/data";

export const useWorkspaceProductCatalog = (
  category: Category,
  positions?: SlotPosition,
) => {
  const { selected, toggleAccessory, toggleCategoryItem } = useWorkspaceStore();

  const filteredProducts = useMemo(
    () => products.filter((item) => item.category === category),
    [category],
  );

  const handleAddItem = (id: AccessoryType | ProductType) => {
    switch (category) {
      case "accessory":
        return toggleAccessory(positions as SlotPosition, id as AccessoryType);
      case "chair":
        return toggleCategoryItem("chair", id as ProductType);
      case "desk":
        return toggleCategoryItem("desk", id as ProductType);
    }
  };

  const getActiveId = () => {
    if (category === "accessory") {
      return selected.accessory[positions as SlotPosition];
    }
    if (category === "chair") return selected.chair;
    if (category === "desk") return selected.desk;
    return null;
  };

  const activeId = getActiveId();

  const isProductDisabled = (id: string) => {
    const isUsedElsewhere =
      category === "accessory" &&
      Object.entries(selected.accessory).some(
        ([pos, value]) => value === id && pos !== positions,
      );

    return (activeId !== null && activeId !== id) || isUsedElsewhere;
  };

  return {
    filteredProducts,
    activeId,
    handleAddItem,
    isProductDisabled,
  };
};
