import { StaticImageData } from "next/image";

export type ProductCardProps = {
  images: StaticImageData;
  productName: string;
  productDesc: string;
  productPrice: number;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};
