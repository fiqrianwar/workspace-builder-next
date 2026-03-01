import { useState, useImperativeHandle } from "react";
import { SlotPosition, TypeRef } from "../types";
import { useWorkspaceStore } from "@/store/useDeskStore";

export const useWorkspaceDialogProductList = (ref: React.Ref<TypeRef>) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [positions, setPosition] = useState<SlotPosition>();

  const { selected } = useWorkspaceStore();

  const handleCloseModal = () => setOpenDialog(false);

  const handleOpenModal = (pos?: SlotPosition) => {
    setPosition(pos);
    setOpenDialog(true);
  };

  useImperativeHandle(
    ref,
    () => ({
      handleOpenModal,
    }),
    [],
  );

  const dialogDesc =
    selected.desk === null || selected.chair === null
      ? "Please Select Your Desk And Chair"
      : !positions
        ? "Please Select Your Accessory Positions"
        : "Please Select Your Accessory";

  return {
    openDialog,
    positions,
    selected,
    dialogDesc,
    handleCloseModal,
    handleOpenModal,
  };
};
