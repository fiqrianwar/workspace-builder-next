import chair01Img from "../../public/images/chair-1.png";
import chair02Img from "../../public/images/chair-2.png";
import desk01Img from "../../public/images/desk-1.png";
import desk02Img from "../../public/images/desk-2.png";
import lampImg from "../../public/images/lamp.png";
import monitorImg from "../../public/images/monitor.png";
import plantImg from "../../public/images/plant.png";
import iconImg from "../../public/images/monis-icon.png";

export const images = {
  chair01: chair01Img,
  chair02: chair02Img,
  desk01: desk01Img,
  desk02: desk02Img,
  lamp: lampImg,
  monitor: monitorImg,
  plant: plantImg,
  icon: iconImg,
} as const;

export type ImageKey = keyof typeof images;
