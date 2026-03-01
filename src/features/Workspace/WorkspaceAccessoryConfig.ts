import { AccessoryType, SlotPosition } from "./types";

export const slotPositionClasses: Record<SlotPosition, string> = {
  left: "top-40 left-32 min-[414px]:left-36 min-[425px]:top-42 md:top-60 md:left-54 lg:left-60",

  center: "top-42 left-52 min-[414px]:left-58 md:top-62 md:left-82 lg:top-62",

  right: "bottom-48 right-2 md:right-2 md:bottom-28 lg:right-22 lg:bottom-28",
};

export const accessoryPositionConfig: Record<
  AccessoryType,
  Record<
    SlotPosition,
    {
      className: string;
      width: number;
      height: number;
      extraClass?: string;
    }
  >
> = {
  lamp: {
    left: {
      className:
        "top-26 left-32 min-[414px]:left-36 min-[425px]:top-28 md:top-32 md:left-54 lg:left-[16em] lg:top-[9em]",
      width: 60,
      height: 60,
      extraClass: "rotate-y-180 md:w-24",
    },
    center: {
      className:
        "top-28 left-42 min-[414px]:left-46 md:top-46 md:left-72 lg:left-[22em] lg:top-[12em]",
      width: 60,
      height: 60,
    },
    right: {
      className:
        "top-30 left-64 min-[414px]:left-72 md:top-[12em] md:left-[27em] lg:left-[28em] lg:top-[13em]",
      width: 60,
      height: 60,
    },
  },

  monitor: {
    left: {
      className:
        "top-24 left-26 min-[414px]:left-31 min-[414px]:top-26 md:left-[12em] md:top-[11em] lg:left-[14em]",
      width: 100,
      height: 100,
    },
    center: {
      className:
        "top-26 left-44 min-[414px]:left-52 md:top-33 md:left-70 lg:top-[10em] lg:left-[19em]",
      width: 100,
      height: 100,
      extraClass: "rotate-y-180 md:w-38 lg:w-32",
    },
    right: {
      className:
        "top-32 left-64 min-[414px]:top-28 min-[414px]:left-68 md:top-48 md:left-[26em] lg:left-[28em]",
      width: 100,
      height: 100,
      extraClass: "rotate-y-180",
    },
  },

  plant: {
    left: {
      className:
        "top-26 left-28 min-[414px]:left-32 min-[414px]:top-28 md:top-46 md:left-52 lg:left-[15em]",
      width: 60,
      height: 60,
    },
    center: {
      className:
        "bottom-6/12 right-24 md:bottom-32 md:right-32 lg:right-[12em] lg:top-[13em]",
      width: 50,
      height: 50,
    },
    right: {
      className:
        "bottom-48 right-2 md:right-2 md:bottom-28 lg:right-[4em] lg:bottom-[7em]",
      width: 60,
      height: 60,
      extraClass: "md:w-20 lg:w-18",
    },
  },
};
