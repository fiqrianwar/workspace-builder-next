"use client";

import { useWorkspaceStore } from "@/store/useDeskStore";

const WorkspacePreview = () => {
  const { getSelectedProducts, getTotalPrice } = useWorkspaceStore();

  const selectedProducts = getSelectedProducts();

  const totalPrice = getTotalPrice();
  const isEmpty = selectedProducts.length === 0;

  return (
    <div className="p-4 pb-32 flex justify-center md:my-32">
      <div className="w-full max-w-md bg-white border border-neutral-200 rounded-2xl shadow-lg p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            Your Workspace
          </h2>
          <p className="text-sm text-neutral-500">
            Review your selected items before checkout.
          </p>
        </div>

        <div className="border-t border-neutral-200" />

        {isEmpty ? (
          <div className="text-center text-sm text-neutral-400 py-8">
            No items selected yet.
          </div>
        ) : (
          <div className="space-y-4">
            {selectedProducts.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-400 capitalize">
                    {item.category}
                  </p>
                </div>

                <p className="text-sm font-semibold text-neutral-900">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-neutral-200" />

        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-neutral-700">Total</span>
          <span className="text-lg font-bold text-neutral-900">
            ${totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePreview;
