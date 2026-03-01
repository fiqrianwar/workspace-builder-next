"use client";

import { useRef } from "react";
import Image from "next/image";
import { PageContainer } from "@/components/layouts";
import { useWorkspaceStore } from "@/store/useDeskStore";
import WorkspaceDialogProductList from "./WorkspaceDialogProductList";
import WorkspaceOpening from "./WorkspaceOpening";
import WorkspacePreview from "./WorkspacePreview";
import { images } from "@/lib/images";
import { SlotPosition, TypeRef } from "./types";
import WorkspaceSetup from "./WorkspaceSetup";

const Workspace = () => {
  const modalRef = useRef<TypeRef>(null);
  const { selected } = useWorkspaceStore();

  const openModal = (position?: SlotPosition) => {
    modalRef.current?.handleOpenModal(position as SlotPosition);
  };

  const isWorkspaceReady = selected.chair && selected.desk;

  return (
    <>
      <PageContainer>
        <div className="my-6 flex justify-center">
          <Image
            src={images.icon}
            alt="Workspace Icon"
            width={200}
            height={200}
          />
        </div>

        {!isWorkspaceReady ? (
          <WorkspaceOpening onClickOpening={() => openModal()} />
        ) : (
          <>
            <WorkspaceSetup openModal={openModal} />
            <WorkspacePreview />
          </>
        )}
      </PageContainer>

      <WorkspaceDialogProductList ref={modalRef} />
    </>
  );
};

export default Workspace;
