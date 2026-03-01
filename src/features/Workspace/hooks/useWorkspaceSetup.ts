import { useMemo } from "react";
import { useWorkspaceStore } from "@/store/useDeskStore";
import { AccessoryType, SlotPosition } from "../types";

export const useWorkspaceSetup = () => {
  const { selected } = useWorkspaceStore();

  const accessoryEntries = useMemo(
    () =>
      Object.entries(selected.accessory) as [
        SlotPosition,
        AccessoryType | null,
      ][],
    [selected.accessory],
  );

  return {
    selected,
    accessoryEntries,
  };
};
