"use client";

import { DialogContent } from "@/components/ui";
import { forwardRef } from "react";
import { TypeRef } from "./types";
import WorkspaceProductCatalog from "./WorkspaceProductCatalog";
import { useWorkspaceDialogProductList } from "./hooks/useWorkspaceDialogProductList";

const WorkspaceDialogProductList = forwardRef<TypeRef>((_, ref) => {
  const { selected, openDialog, positions, dialogDesc, handleCloseModal } =
    useWorkspaceDialogProductList(ref);

  return (
    <DialogContent
      open={openDialog}
      onOpenChange={handleCloseModal}
      dialogTitle="Catalog List"
      dialogDesc={dialogDesc}
    >
      <div className="max-h-[65vh] overflow-y-auto space-y-5">
        <WorkspaceProductCatalog title="Desk" category="desk" />
        <WorkspaceProductCatalog title="Chair" category="chair" />

        {selected.chair !== null && selected.desk !== null && (
          <WorkspaceProductCatalog
            title="Accessory"
            category="accessory"
            positions={positions}
          />
        )}
      </div>
    </DialogContent>
  );
});

WorkspaceDialogProductList.displayName = "WorkspaceDialogProductList";

export default WorkspaceDialogProductList;
