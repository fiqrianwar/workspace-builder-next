import Image from "next/image";
import React from "react";
import { AccessoryType, SlotPosition } from "./types";
import { ImageKey, images } from "@/lib/images";
import {
  accessoryPositionConfig,
  slotPositionClasses,
} from "./WorkspaceAccessoryConfig";
import WorkspaceAccessory from "./WorkspaceAccessory";

import { CirclePlus } from "lucide-react";
import { useWorkspaceSetup } from "./hooks/useWorkspaceSetup";
import { Button } from "@/components/ui";

const WorkspaceSetup = ({
  openModal,
}: {
  openModal: (position?: SlotPosition) => void;
}) => {
  const { selected, accessoryEntries } = useWorkspaceSetup();

  const renderAccessory = (type: AccessoryType, position: SlotPosition) => {
    const config = accessoryPositionConfig[type][position];

    return (
      <div
        key={`${position}-${type}`}
        className={`absolute ${config.className} cursor-pointer`}
        onClick={() => openModal(position)}
      >
        <WorkspaceAccessory
          src={images[type]}
          width={config.width}
          height={config.height}
          className={config.extraClass}
        />
      </div>
    );
  };

  const renderEmptySlot = (position: SlotPosition) => (
    <div key={position} className={`absolute ${slotPositionClasses[position]}`}>
      <Button
        className="bg-accent-foreground shadow-md hover:scale-105 transition"
        onClick={() => openModal(position)}
        label={<CirclePlus />}
      />
    </div>
  );

  return (
    <div className="flex justify-around">
      <div className="w-6 md:w-1/4 lg:w-1/3 xl:w-1/2" />

      <div className="relative w-full h-100 rounded-2xl">
        {selected.chair && (
          <div className="absolute top-27.5">
            <Image
              src={images[selected.chair as ImageKey]}
              alt="Selected Chair"
              width={140}
              height={140}
              className="rotate-y-180 drop-shadow-xl transition-all duration-300 md:w-55"
            />
          </div>
        )}

        {selected.desk && (
          <div className="absolute top-5/14 left-3/12 md:top-6/12 md:left-3/10">
            <Image
              src={images[selected.desk as ImageKey]}
              alt="Selected Desk"
              width={280}
              height={280}
              className="drop-shadow-xl transition-all duration-300 md:w-92"
            />
          </div>
        )}

        {accessoryEntries.map(([position, type]) =>
          type ? renderAccessory(type, position) : renderEmptySlot(position),
        )}
      </div>

      <div className="w-6 md:w-1/4 lg:w-1/3 xl:w-1/2" />
    </div>
  );
};

export default WorkspaceSetup;
