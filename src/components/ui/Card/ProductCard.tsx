import Image from "next/image";

import { ProductCardProps } from "./types";

const ProductCard = ({
  images,
  productName,
  productDesc,
  productPrice,
  onClick,
  isActive = false,
  isDisabled = false,
}: ProductCardProps) => {
  const handleClick = () => {
    if (isDisabled) return;
    onClick?.();
  };

  return (
    <div
      className={`
        group rounded-2xl overflow-hidden border transition-all duration-300
        ${isActive ? "border-black shadow-xl" : "border-neutral-200 shadow-md"}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl"}
        bg-white
      `}
    >
      <div className="relative aspect-square bg-neutral-50 flex items-center justify-center overflow-hidden">
        <Image
          src={images}
          alt={productName}
          width={500}
          height={500}
          className={`
            w-[55%] h-auto object-contain transition-transform duration-300
            ${!isDisabled && "group-hover:scale-105"}
          `}
        />
      </div>

      <div className="p-4 space-y-2">
        <div>
          <h3 className="font-semibold text-lg text-neutral-800">
            {productName}
          </h3>
        </div>

        <p className="text-sm text-neutral-500 line-clamp-2">{productDesc}</p>
        <span className="font-bold text-neutral-900">${productPrice}</span>

        {onClick && (
          <div className="mt-4">
            <button
              onClick={handleClick}
              disabled={isDisabled}
              className={`
                w-full px-4 py-2 rounded-lg text-sm transition
                ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:bg-neutral-800"
                }
                ${isDisabled ? "bg-neutral-400 cursor-not-allowed" : ""}
              `}
            >
              {isActive ? "Selected" : "Select"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
