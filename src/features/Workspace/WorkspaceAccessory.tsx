import Image from "next/image";
import { WorkspaceAccessoryProps } from "./types";

const WorkspaceAccessory = ({
  src,
  width,
  height,
  className,
}: WorkspaceAccessoryProps) => {
  return (
    <Image
      src={src}
      alt={""}
      width={width}
      height={height}
      className={`${className} drop-shadow-xl transition-all duration-300`}
    />
  );
};

export default WorkspaceAccessory;
