import { AccessoryType, WorkspaceProductCatalogProps } from "./types";
import { useWorkspaceProductCatalog } from "./hooks/useWorkspaceProductCatalog";
import { ProductType } from "@/lib/type";
import { ProductCard } from "@/components/ui";

const WorkspaceProductCatalog = ({
  title,
  category,
  positions,
}: WorkspaceProductCatalogProps) => {
  const { filteredProducts, activeId, handleAddItem, isProductDisabled } =
    useWorkspaceProductCatalog(category, positions);

  return (
    <div>
      <h1 className="font-bold">{title}</h1>

      <div className="grid grid-cols-2 gap-4 mt-2">
        {filteredProducts.map(({ id, name, description, price, image }) => (
          <ProductCard
            key={id}
            productName={name}
            productDesc={description}
            productPrice={price}
            images={image}
            isActive={activeId === id}
            isDisabled={isProductDisabled(id)}
            onClick={() => handleAddItem(id as ProductType | AccessoryType)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkspaceProductCatalog;
